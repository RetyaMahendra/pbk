package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "kredit")
public class KreditProperties {
	private String debiturOutToKreditTopicName;
	private String feederOutToKreditTopicName;
	private String productInFromKreditTopicName;
	private String kreditOutToTransactionTopicName;
	private String kreditOutToInquiryTopicName;
}
