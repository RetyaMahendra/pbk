package com.poc;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
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
import com.poc.model.SearchParameter;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class InquiryService implements PbkProducer {
	@Autowired
	IndividuRepository individuRepository;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Autowired
	InquiryProperties properties;

	@Autowired
	ObjectMapper mapper;

	@KafkaListener(topics = "${inquiry.search-out-to-inquiry-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeSearch(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getSearchOutToInquiryTopicName(), event.toString()));

		// process to get most updated individu data

		SearchParameter searchParameter = mapper.convertValue(event.getData(), SearchParameter.class);
		List<Individu> individues = search(searchParameter.getValue());

		PbkMessage e = new PbkMessage();
		e.setData(individues);
		e.setModelType(ModelType.INDIVIDU_LIST);
		e.setStatus(MessageStatus.COMPLETED);
		e.setUuid(event.getUuid());
		e.setMessage(String.format("Result: %d", individues.size()));

		// return result collection to search orchestrator
		sendMessage(e, properties.getSearchInFromInquiryTopicName());
	}

	@KafkaListener(topics = "${inquiry.kredit-out-to-inquiry-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeKredit(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getKreditOutToInquiryTopicName(), event.toString()));

		Debitur debitur = mapper.convertValue(event.getData(), Debitur.class);

		Individu individu = new Individu();
		individu.setNomorIdentitas(debitur.getNomorIdentitas());
		individu.setNamaSesuaiIdentitas(debitur.getNamaSesuaiIdentitas());
		individu.setTanggalLahir(debitur.getTanggalLahir());
		individu.setTanggalAksesTerakhir(new Date());

		individuRepository.save(individu);

	}

	@Override
	public void sendMessage(PbkMessage event, String topicName) {
		Message<PbkMessage> message = MessageBuilder.withPayload(event).setHeader(KafkaHeaders.TOPIC, topicName)
				.build();
		kafkaTemplate.send(message);
		log.info(String.format("-> %s, %s", topicName, event.toString()));
	}

	private List<Individu> search(String value) {

		HashMap<String, Individu> individus = new HashMap<>();

		// find by nomor identitas
		Optional<Individu> individuByIdentitas = individuRepository.findById(value);
		if (individuByIdentitas.isPresent())
			individus.put(individuByIdentitas.get().getNomorIdentitas(), individuByIdentitas.get());

		// find by nama sesuai ktp
		List<Individu> individuByNama = individuRepository.searchByNamaSesuaiIdentitasIgnoreCase(value);
		for (Individu individu : individuByNama) {
			individus.put(individu.getNomorIdentitas(), individu);
		}

		// find by tanggal lahir
		List<Individu> individuByTanggalLahir = individuRepository.searchByTanggalLahir(value);
		for (Individu individu : individuByTanggalLahir) {
			individus.put(individu.getNomorIdentitas(), individu);
		}

		return new ArrayList<>(individus.values());
	}
}
