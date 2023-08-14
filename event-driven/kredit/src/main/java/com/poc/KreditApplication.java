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
@EnableConfigurationProperties(KreditProperties.class)
public class KreditApplication {

	public static void main(String[] args) {
		SpringApplication.run(KreditApplication.class, args);
	}

}
