package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "inquiry")
public class InquiryProperties {
	private String searchInFromInquiryTopicName;
	private String searchOutToInquiryTopicName;
	private String kreditOutToInquiryTopicName;
	
}
