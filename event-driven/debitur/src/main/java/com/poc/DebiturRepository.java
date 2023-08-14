package com.poc;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.model.Debitur;

public interface DebiturRepository extends JpaRepository<Debitur, String> {
	List<Debitur> findByNomorIdentitasOrderByKodeJenisPelaporAscKodePelaporAscTahunBulanDataDescCreateDateAsc(
			String nomorIdentitas);

	Optional<Debitur> findFirst1ByNomorIdentitasOrderByTahunBulanDataDescCreateDateDesc(String nomorIdentitas);
}
