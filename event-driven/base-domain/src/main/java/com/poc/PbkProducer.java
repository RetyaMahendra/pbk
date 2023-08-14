package com.poc;

public interface PbkProducer {
	public void sendMessage(PbkMessage event, String topicName);
}
