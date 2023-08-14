package com.poc;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.poc.model.Individu;

public interface IndividuRepository extends CrudRepository<Individu, String> {
	List<Individu> searchByNamaSesuaiIdentitasIgnoreCase(String namaSesuaiIdentitas);

	List<Individu> searchByTanggalLahir(String tanggalLahir);
}
