package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * This class is module to full text search to redis 
 * 
 * ref redis: https://refactorfirst.com/spring-boot-with-redis-stack-and-redis-insight
 * 
 * @author Lenovo
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(InquiryProperties.class)
public class InquiryApplication {

	public static void main(String[] args) {
		SpringApplication.run(InquiryApplication.class, args);
	}

}
