package com.poc;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poc.BaseDomainApplication.MessageStatus;
import com.poc.BaseDomainApplication.ModelType;
import com.poc.model.Debitur;
import com.poc.model.Kredit;
import com.poc.model.Report;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class KreditService implements PbkProducer, PbkConsumer {
	@Autowired
	KreditProperties properties;

	@Autowired
	KreditRepository repository;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Autowired
	ObjectMapper objectMapper;

	@KafkaListener(topics = "${kredit.feeder-out-to-kredit-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeFeeder(PbkMessage event) {
		consume(event);
	}

	@KafkaListener(topics = "${kredit.debitur-out-to-kredit-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeKredit(PbkMessage event) {
		consume(event);
	}

	@Override
	public void consume(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getDebiturOutToKreditTopicName(), event.toString()));

		Debitur debitur = objectMapper.convertValue(event.getData(), Debitur.class);
		List<Kredit> kredits = repository
				.findByKodeJenisPelaporAndKodePelaporAndNomorCifDebiturOrderByKodeJenisPelaporAscKodePelaporAscTahunBulanDataAscCreateDateAsc(
						debitur.getKodeJenisPelapor(), debitur.getKodePelapor(), debitur.getNomorCifDebitur());

		HashMap<String, Kredit> k = new HashMap<>();
		for (Kredit kredit : kredits) {
			k.put(kredit.getKodeJenisPelapor() + kredit.getKodePelapor(), kredit);
		}

		// constract idebku
		BigDecimal bakiDebit = new BigDecimal("0.00");
		BigDecimal palfonEfective = new BigDecimal("0.00");
		Integer kualitasTerburuk = 0;
		String kualitasTerburukTahunBulan = "";

		Collection<Kredit> l = (Collection<Kredit>) k.values();
		for (Kredit kredit : l) {
			bakiDebit = bakiDebit.add(kredit.getBakiDebit());
			palfonEfective = palfonEfective.add(kredit.getPlafon());
			if (kualitasTerburuk < Integer.parseInt(kredit.getKodeKualitasKreditAtauPembiayaan())) {
				kualitasTerburuk = Integer.parseInt(kredit.getKodeKualitasKreditAtauPembiayaan());
				kualitasTerburukTahunBulan = kredit.getTahunBulanData();
			}
		}

		Report report = new Report();
		report.setId(event.getUuid());
		report.setBakiDebit(bakiDebit);
		report.setDebitur(debitur);
		report.setKredits((Collection<Kredit>) k.values());
		report.setKualistasTerburukTahunBulan(kualitasTerburukTahunBulan);
		report.setKualitasTerburuk(kualitasTerburuk);
		report.setPlafonEfective(palfonEfective);

		// send REPORT data to transaction log
		PbkMessage e1 = new PbkMessage();
		e1.setData(report);
		e1.setModelType(ModelType.REPORT);
		e1.setStatus(MessageStatus.REQUEST);
		e1.setUuid(event.getUuid());
		sendMessage(e1, properties.getKreditOutToTransactionTopicName());

		// send REPORT data to product service
		PbkMessage e2 = new PbkMessage();
		e2.setData(report);
		e2.setModelType(ModelType.REPORT);
		e2.setStatus(MessageStatus.COMPLETED);
		e2.setUuid(event.getUuid());
		sendMessage(e2, properties.getProductInFromKreditTopicName());

		// update redis

		PbkMessage e3 = new PbkMessage();
		e3.setData(debitur);
		e3.setModelType(ModelType.DEBITUR);
		e3.setStatus(MessageStatus.REQUEST);
		e3.setUuid(event.getUuid());
		sendMessage(e3, properties.getKreditOutToInquiryTopicName());

	}

	@Override
	public void sendMessage(PbkMessage event, String topicName) {
		Message<PbkMessage> message = MessageBuilder.withPayload(event).setHeader(KafkaHeaders.TOPIC, topicName)
				.build();
		kafkaTemplate.send(message);
		log.info(String.format("-> %s, %s", topicName, event.toString()));
	}
}
