package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "feeder")
public class FeederProperties {
	private String feederOutToKreditTopicName;
	private String debiturOutToFeederTopicName;
	private String onlineDataLocation;
}
