package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "product.orchestrator")
public class ProductProperties {
	private String productOutToDebiturTopicName;
	private String productInFromKreditTopicName;
}
