package com.poc.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ScoreCard {
	@Id
	@Column(length = 36)
	private String nomorIdentitas;

	@JsonProperty("Age")
	private Integer Age;

	@JsonProperty("RMax CC Utillization L12M")
	private Integer RMaxCCUtillizationL12M;

	@JsonProperty("M Since First Bank Contract Started L12M")
	private Integer MSinceFirstBankContrStartedL12M;

	@JsonProperty("NMax Past Due Days L12M")
	private Integer NMaxPastDueDaysL12M;

	@JsonProperty("Sum of Total Amount Closed Position L12M")
	private Integer SumTotalAmountClosedPosL12M;

	@JsonProperty("RMax Due To Total Amaount L12M")
	private Integer RMaxDueToTotAmtL12M;

	@JsonProperty("NCB Started Subs 12M")
	private Integer NCBStartedSubs12M;

	@JsonProperty("NFin Contract Started L12M")
	private Integer NFinContrStartedL12M;

	@JsonProperty("RMax Out To TLALN Curr")
	private Integer RMaxOutToTLALNCurr;

	@JsonProperty("NBAct Contract L12M")
	private Integer NBActContrL12M;

	@JsonProperty("NCB Closed Negative 12M")
	private Integer NCBClosedNegative12M;

}
