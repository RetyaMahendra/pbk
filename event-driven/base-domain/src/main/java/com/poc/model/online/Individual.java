package com.poc.model.online;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Individual {

	@JsonProperty("KodeJenisPelapor")
	private String kodeJenisPelapor;

	@JsonProperty("KodePelapor")
	private String kodePelapor;

	@JsonProperty("TahunBulanData")
	private String tahunBulanData;

	@JsonProperty("NomorCIFLamaDebitur")
	private String nomorCIFLamaDebitur;

	@JsonProperty("NomorCIFDebitur")
	private String nomorCIFDebitur;

	@JsonProperty("JenisIdentitas")
	private String jenisIdentitas;

	@JsonProperty("NomorIdentitas")
	private String nomorIdentitas;

	@JsonProperty("NamaSesuaiIdentitas")
	private String namaSesuaiIdentitas;

	@JsonProperty("NamaLengkap")
	private String namaLengkap;

	@JsonProperty("KodeStatusPendidikanatauGelarDebitur")
	private String kodeStatusPendidikanatauGelarDebitur;

	@JsonProperty("JenisKelamin")
	private String jenisKelamin;

	@JsonProperty("TempatLahir")
	private String tempatLahir;

	@JsonProperty("TanggalLahir")
	private String tanggalLahir;

	@JsonProperty("NamaGadisIbuKandung")
	private String namaGadisIbuKandung;

	@JsonProperty("NPWP")
	private String npwp;

	@JsonProperty("Alamat")
	private String alamat;

	@JsonProperty("Kelurahan")
	private String kelurahan;

	@JsonProperty("Kecamatan")
	private String kecamatan;

	@JsonProperty("KodeKabupatenatauKota")
	private String kodeKabupatenatauKota;

	@JsonProperty("KodePos")
	private String kodePos;

	@JsonProperty("NomorTelepon")
	private String nomorTelepon;

	@JsonProperty("NomorTeleponSeluler")
	private String nomorTeleponSeluler;

	@JsonProperty("Alamatemail")
	private String alamatEmail;

	@JsonProperty("KodeNegaraDomisili")
	private String kodeNegaraDomisili;

	@JsonProperty("KodePekerjaan")
	private String kodePekerjaan;

	@JsonProperty("TempatBekerja")
	private String tempatBekerja;

	@JsonProperty("KodeBidangUsahaTempatKerja")
	private String kodeBidangUsahaTempatKerja;

	@JsonProperty("AlamatTempatBekerja")
	private String alamatTempatBekerja;

	@JsonProperty("KodeGolonganDebitur")
	private String kodeGolonganDebitur;

	@JsonProperty("StatusPerkawinanDebitur")
	private String statusPerkawinanDebitur;

	@JsonProperty("KodeKantorCabang")
	private String kodeKantorCabang;

	@JsonProperty("OperasiData")
	private String operasiData;

	@JsonProperty("Statusdelete")
	private String statusdelete;

	@JsonProperty("CreateDate")
	private String createDate;

	@JsonProperty("UpdateDate")
	private String updateDate;
}
