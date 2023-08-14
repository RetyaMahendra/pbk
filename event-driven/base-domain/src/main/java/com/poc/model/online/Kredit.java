package com.poc.model.online;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Kredit {
	@JsonProperty("KodeJenisPelapor")
	private String kodeJenisPelapor;

	@JsonProperty("KodePelapor")
	private String kodePelapor;

	@JsonProperty("TahunBulanData")
	private String tahunBulanData;

	@JsonProperty("KodeJenisFasilitas")
	private String kodeJenisFasilitas;

	@JsonProperty("NomorRekeningFasilitas")
	private String nomorRekeningFasilitas;

	@JsonProperty("NomorRekeningLamaFasilitas")
	private String nomorRekeningLamaFasilitas;

	@JsonProperty("NomorCIFDebitur")
	private String nomorCIFDebitur;

	@JsonProperty("KodeSifatKreditatauPembiayaan")
	private String kodeSifatKreditatauPembiayaan;

	@JsonProperty("KodeJenisKreditatauPembiayaan")
	private String kodeJenisKreditatauPembiayaan;

	@JsonProperty("KodeAkadKreditatauAkadPembiayaan")
	private String kodeAkadKreditatauAkadPembiayaan;

	@JsonProperty("NomorAkadAwal")
	private String nomorAkadAwal;

	@JsonProperty("TanggalAkadAwal")
	private String tanggalAkadAwal;

	@JsonProperty("NomorAkadAkhir")
	private String nomorAkadAkhir;

	@JsonProperty("TanggalAkadAkhir")
	private String tanggalAkadAkhir;

	@JsonProperty("FrekuensiPerpanjanganFasilitasKreditatauPembiayaan")
	private String frekuensiPerpanjanganFasilitasKreditatauPembiayaan;

	@JsonProperty("TanggalAwalKreditatauPembiayaan")
	private String tanggalAwalKreditatauPembiayaan;

	@JsonProperty("TanggalMulai")
	private String tanggalMulai;

	@JsonProperty("TanggalJatuhTempo")
	private String tanggalJatuhTempo;

	@JsonProperty("KodeKategoriDebitur")
	private String kodeKategoriDebitur;

	@JsonProperty("KodeJenisPenggunaan")
	private String kodeJenisPenggunaan;

	@JsonProperty("KodeOrientasiPenggunaan")
	private String kodeOrientasiPenggunaan;

	@JsonProperty("KodeSektorEkonomi")
	private String kodeSektorEkonomi;

	@JsonProperty("KodeKabupatenatauKotaLokasiProyekatauPenggunaanKreditAtauPembiayaan")
	private String kodeKabupatenatauKotaLokasiProyekatauPenggunaanKreditAtauPembiayaan;

	@JsonProperty("NilaiProyek")
	private String nilaiProyek;

	@JsonProperty("KodeValuta")
	private String kodeValuta;

	@JsonProperty("SukuBungaatauImbalan")
	private String sukuBungaatauImbalan;

	@JsonProperty("JenisSukuBungaatauImbalan")
	private String jenisSukuBungaatauImbalan;

	@JsonProperty("KreditatauPembiayaanProgramPemerintah")
	private String kreditatauPembiayaanProgramPemerintah;

	@JsonProperty("PlafonAwal")
	private String plafonAwal;

	@JsonProperty("Plafon")
	private String plafon;

	@JsonProperty("RealisasiatauPencairanBulanBerjalan")
	private String realisasiatauPencairanBulanBerjalan;

	@JsonProperty("Denda")
	private String denda;

	@JsonProperty("BakiDebit")
	private String bakiDebit;

	@JsonProperty("NilaiDalamMataUangAsal")
	private String nilaiDalamMataUangAsal;

	@JsonProperty("KodeKualitasKreditatauPembiayaan")
	private String kodeKualitasKreditatauPembiayaan;

	@JsonProperty("TanggalMacet")
	private String tanggalMacet;

	@JsonProperty("KodeSebabMacet")
	private String kodeSebabMacet;

	@JsonProperty("TunggakanPokok")
	private String tunggakanPokok;

	@JsonProperty("TunggakanBungaatauImbalan")
	private String tunggakanBungaatauImbalan;

	@JsonProperty("JumlahHariTunggakan")
	private String jumlahHariTunggakan;

	@JsonProperty("FrekuensiTunggakan")
	private String frekuensiTunggakan;

	@JsonProperty("FrekuensiRestrukturisasi")
	private String frekuensiRestrukturisasi;

	@JsonProperty("TanggalRestrukturisasiAwal")
	private String tanggalRestrukturisasiAwal;

	@JsonProperty("TanggalRestrukturisasiAkhir")
	private String tanggalRestrukturisasiAkhir;

	@JsonProperty("KodeCaraRestrukturisasi")
	private String kodeCaraRestrukturisasi;

	@JsonProperty("KodeKondisi")
	private String kodeKondisi;

	@JsonProperty("TanggalKondisi")
	private String tanggalKondisi;

	@JsonProperty("Keterangan")
	private String keterangan;

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

	@JsonProperty("History")
	private List<Kredit> Histories;
}
