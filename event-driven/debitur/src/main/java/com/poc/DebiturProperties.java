package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "debitur")
public class DebiturProperties {
	private String debiturOutToKreditTopicName;
	private String debiturOutToFeederTopicName;
	private String productOutToDebiturTopicName;
}
