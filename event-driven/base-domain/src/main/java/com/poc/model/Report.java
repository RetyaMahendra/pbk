package com.poc.model;

import java.math.BigDecimal;
import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Report {

	// transaction id
	private String id;

	@JsonProperty("Most Updated Individu")
	private Debitur debitur;

	private Collection<Kredit> kredits;
	
	@JsonProperty("Score Card")
	private ScoreCard scoreCard;
	
	@JsonProperty("Plafon Efective")
	private BigDecimal plafonEfective;

	@JsonProperty("Baki Debit")
	private BigDecimal bakiDebit;

	@JsonProperty("Kualitas Terburuk")
	private Integer kualitasTerburuk;

	@JsonProperty("Kualitas Terburuk Tahun Bulan")
	private String kualistasTerburukTahunBulan;
}