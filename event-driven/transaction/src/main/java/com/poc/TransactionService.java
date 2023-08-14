package com.poc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.poc.model.Report;
import com.poc.model.TransactionLog;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TransactionService implements PbkConsumer {
	@Autowired
	TransactionProperties properties;

	@Autowired
	TransactionRepository repository;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Autowired
	ObjectMapper objectMapper;

	@Override
	@KafkaListener(topics = "${transaction.kredit-out-to-transaction-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consume(PbkMessage event) {
		log.info(String.format("<- %s", event.toString()));

		// process to get list of kredits based on individu
		Report report = objectMapper.convertValue(event.getData(), Report.class);

		TransactionLog transactionLog = new TransactionLog();
		transactionLog.setId(report.getId());
		try {
			transactionLog.setReport(objectMapper.writeValueAsString(report));
		} catch (JsonProcessingException e) {
			log.error(e.getMessage(), e);
		}
		repository.save(transactionLog);
	}

}
