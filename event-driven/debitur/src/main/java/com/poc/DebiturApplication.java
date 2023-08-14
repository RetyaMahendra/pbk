package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * This class is a Debitur Service type, to get information about Debitur
 * 
 * @author Lenovo
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(DebiturProperties.class)
public class DebiturApplication {

	public static void main(String[] args) {
		SpringApplication.run(DebiturApplication.class, args);
	}

}
