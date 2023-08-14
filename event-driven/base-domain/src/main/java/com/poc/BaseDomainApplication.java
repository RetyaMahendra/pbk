package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.redis.om.spring.annotations.EnableRedisEnhancedRepositories;

@SpringBootApplication
@EnableRedisEnhancedRepositories(basePackages = "com.poc")
public class BaseDomainApplication {

	public static enum MessageStatus {
		REQUEST, ACEPTED, ERROR, COMPLETED
	}

	public static enum ModelType {
		SEARCH_PARAMETER, // full text search parameter
		INDIVIDU_LIST, // list of individu full text search research
		INDIVIDU_SELECTED, // an individu selected by user or system to next processing
		DEBITUR, // debitur
		KREDIT, // kredit
		REPORT
	}

	public static void main(String[] args) {
		SpringApplication.run(BaseDomainApplication.class, args);
	}

}
