package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * This class is a Kredit Service type, to get information about kredit
 * information
 * 
 * @author Lenovo
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(TransactionProperties.class)
public class TransactionApplication {

	public static void main(String[] args) {
		SpringApplication.run(TransactionApplication.class, args);
	}

}
