package com.poc.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import com.redis.om.spring.annotations.Searchable;

import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RedisHash
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Individu {
	@Id
	@Searchable
	private String nomorIdentitas;

	@Searchable
	@Column(length = 128)
	private String namaSesuaiIdentitas;

	@Searchable
	@Column(length = 8)
	private String tanggalLahir; // yyyyMMdd

	@Temporal(TemporalType.TIMESTAMP)
	private Date tanggalAksesTerakhir;
}
