package com.poc;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.model.Kredit;

public interface KreditRepository extends JpaRepository<Kredit, String> {
	List<Kredit> findByKodeJenisPelaporAndKodePelaporAndNomorCifDebiturOrderByKodeJenisPelaporAscKodePelaporAscTahunBulanDataAscCreateDateAsc(
			String kodeJenisPelapor, String kodePelapor, String nomorCifDebitur);
}
