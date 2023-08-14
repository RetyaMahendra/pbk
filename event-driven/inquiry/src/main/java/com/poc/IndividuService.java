package com.poc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.poc.model.Individu;

public class IndividuService {
	@Autowired
	IndividuRepository repository;
	
	public Individu add(Individu individu) {
		return repository.save(individu);
	}
	
	public List<Individu> searchByNamaSesuaiIdentitasIgnoreCase(String namaSesuaiIdentitas){
		return repository.searchByNamaSesuaiIdentitasIgnoreCase(namaSesuaiIdentitas);
	}
	
	public List<Individu> searchByTanggalLahir(String tanggalLahir){
		return repository.searchByTanggalLahir(tanggalLahir);
	}
}
