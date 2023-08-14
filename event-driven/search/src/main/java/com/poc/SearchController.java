package com.poc;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.poc.BaseDomainApplication.MessageStatus;
import com.poc.BaseDomainApplication.ModelType;

import lombok.extern.slf4j.Slf4j;

/**
 * reference: https://www.youtube.com/watch?v=T_JZzdPCkOU
 * 
 * @author Lenovo
 *
 */

@RestController
@RequestMapping("/search")
@Slf4j
public class SearchController {
	@Autowired
	SearchProperties properties;

	@Autowired
	SearchService service;

	@Autowired
	List<SseEmitter> emitters;

	@PostMapping("/inquiry")
	public PbkMessage searchIndividu(@RequestBody PbkMessage event) {
		log.info(String.format("<- %s, %s", "application", event.toString()));

		if (event.getModelType() == ModelType.SEARCH_PARAMETER) {
			if (event.getUuid() == null)
				event.setUuid(UUID.randomUUID().toString());
			event.setStatus(MessageStatus.ACEPTED);
			event.setMessage("OK");
			service.sendMessage(event, properties.getSearchOutToInquiryTopicName());
		} else {
			event.setMessage("Need SEARCH_PARAMETER event model type.");
			event.setStatus(MessageStatus.ERROR);
		}
		return event;
	}

	// web browser subscribe for SSE end point
	@CrossOrigin("*")
	@RequestMapping(value = "/subscribe", consumes = MediaType.ALL_VALUE)
	public SseEmitter subscribe() {
		SseEmitter sseEmitter = new SseEmitter(Long.MAX_VALUE);
		try {
			sseEmitter.send(SseEmitter.event().name("INIT"));
		} catch (IOException e) {
			log.error(e.getMessage(), e);
		}
		sseEmitter.onCompletion(() -> {
			emitters.remove(sseEmitter);
		});
		emitters.add(sseEmitter);
		return sseEmitter;
	}

	// Server dispatching event to web browser
	@GetMapping("/test/event")
	public void testEvent() {
		for (SseEmitter sseEmitter : emitters) {
			try {
				sseEmitter.send(SseEmitter.event().name("search").data("test"));
			} catch (IOException e) {
				emitters.remove(sseEmitter);
			}
		}
	}

	@GetMapping("/test/hello")
	public String hello() {
		return "hello world!\n";
	}

}
