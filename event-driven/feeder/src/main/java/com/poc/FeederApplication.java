package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * This class is a Individu Service type, to get information about individu
 * 
 * @author Lenovo
 *
 */
@SpringBootApplication
@EnableConfigurationProperties(FeederProperties.class)
public class FeederApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeederApplication.class, args);
	}

}
