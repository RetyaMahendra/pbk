package com.poc;

import com.poc.BaseDomainApplication.MessageStatus;
import com.poc.BaseDomainApplication.ModelType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PbkMessage {
	private String uuid;
	private MessageStatus status;
	private ModelType modelType;
	private Object data;
	private String message;

}
