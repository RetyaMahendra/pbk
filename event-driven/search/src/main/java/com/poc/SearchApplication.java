package com.poc;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

/**
 * This class is a Search Orchestrataor Service type, to get information about
 * individu and his credit information
 * 
 * @author Lenovo
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(SearchProperties.class)
public class SearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(SearchApplication.class, args);
	}

	@Bean
	public List<SseEmitter> emitters() {
		return new CopyOnWriteArrayList<SseEmitter>();
	}

}
