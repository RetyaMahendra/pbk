package com.poc.model.online;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OnlineData {
	@JsonProperty("NomorIdentitas")
	private String nomorIdentitas;

	@JsonProperty("DebiturIndividuals")
	private List<Individual> debiturIndividuals;

	@JsonProperty("Kredits")
	private List<Kredit> kredits;
}
