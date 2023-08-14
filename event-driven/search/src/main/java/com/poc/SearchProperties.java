package com.poc;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "search.orchestrator")
public class SearchProperties {

	private String searchInFromInquiryTopicName;

	private String searchInFromKreditTopicName;

	private String searchOutToInquiryTopicName;

	private String searchOutToDebiturTopicName;
}
