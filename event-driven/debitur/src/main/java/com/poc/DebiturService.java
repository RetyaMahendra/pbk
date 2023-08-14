package com.poc;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

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
import com.poc.model.Individu;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DebiturService implements PbkProducer, PbkConsumer {
	@Autowired
	DebiturProperties properties;

	@Autowired
	DebiturRepository repository;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Autowired
	ObjectMapper mapper;

	@Override
	@KafkaListener(topics = "${debitur.product-out-to-debitur-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consume(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getProductOutToDebiturTopicName(), event.toString()));

		Individu individu = mapper.convertValue(event.getData(), Individu.class);
		Calendar c = Calendar.getInstance();
		c.setTime(individu.getTanggalAksesTerakhir());
		c.add(Calendar.HOUR, 24);

		if (c.getTime().after(new Date())) {
			// still fresh data
			Optional<Debitur> debitur = repository
					.findFirst1ByNomorIdentitasOrderByTahunBulanDataDescCreateDateDesc(individu.getNomorIdentitas());

			if (debitur.isPresent()) {
				PbkMessage e = new PbkMessage();
				e.setData(debitur.get());
				e.setModelType(ModelType.DEBITUR);
				e.setStatus(MessageStatus.REQUEST);
				e.setUuid(event.getUuid());

				// base on debitur, get kredit
				sendMessage(e, properties.getDebiturOutToKreditTopicName());
			}
		} else {
			// get online data from feeder service
			PbkMessage e = new PbkMessage();
			e.setData(individu);
			e.setModelType(ModelType.INDIVIDU_SELECTED);
			e.setStatus(MessageStatus.REQUEST);
			e.setUuid(event.getUuid());

			// base on individu, get fresh data form feeder
			sendMessage(e, properties.getDebiturOutToFeederTopicName());
		}

	}

	@Override
	public void sendMessage(com.poc.PbkMessage event, String topicName) {
		Message<PbkMessage> message = MessageBuilder.withPayload(event).setHeader(KafkaHeaders.TOPIC, topicName)
				.build();
		kafkaTemplate.send(message);
		log.info(String.format("-> %s, %s", topicName, event.toString()));

	}

}
