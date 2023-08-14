package com.poc;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SearchService implements PbkProducer, PbkConsumer {
	@Autowired
	SearchProperties properties;

	@Autowired
	List<SseEmitter> emitters;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Override
	public void sendMessage(PbkMessage event, String topicName) {
		Message<PbkMessage> message = MessageBuilder.withPayload(event).setHeader(KafkaHeaders.TOPIC, topicName)
				.build();
		kafkaTemplate.send(message);
		log.info(String.format("-> %s, %s", topicName, event.toString()));
	}

	@KafkaListener(topics = "${search.orchestrator.search-in-from-inquiry-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeInquery(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getSearchInFromInquiryTopicName(), event.toString()));
		consume(event);
	}

	@KafkaListener(topics = "${search.orchestrator.search-in-from-kredit-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consumeKredit(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getSearchInFromKreditTopicName(), event.toString()));
		consume(event);
	}

	@Override
	public void consume(PbkMessage event) {

		// create server sent event here
		for (SseEmitter sseEmitter : emitters) {
			try {
				sseEmitter.send(event);
			} catch (IOException e) {
				emitters.remove(sseEmitter);
			}
		}
		log.info(String.format("-> %s, %s", "application", event.toString()));
	}
}
