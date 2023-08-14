package com.poc.model;

import java.math.BigDecimal;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @Id adalah id yang merupakan gabungan dari kode_jenis_pelapor + kode_pelapor
 *     nomor_cif_debitur + nomorRekeningFasilitas id ini diperlukan untuk
 *     digunakan sebagai distribution key pada database citus (postgres db's
 *     extension)
 * @author Lenovo
 *
 */
@Data
@AllArgsConstructor
@Entity
@Table(indexes = { @Index(name = "i_kredit", columnList = "kodeJenisPelapor, kodePelapor, nomorCifDebitur, tahunBulanData, nomorRekeningFasilitas", unique = true) })
public class Kredit {

	public Kredit() {
		this.id = UUID.randomUUID();
	}

	@Id
	@GeneratedValue
	private UUID id; // uuid

	@JsonProperty("Tahun Bulan Data")
	@Column(length = 8)
	private String tahunBulanData;

	@Column(length = 4)
	@JsonProperty("Kode Jenis Pelapor")
	private String kodeJenisPelapor;

	@Column(length = 6)
	@JsonProperty("Kode Pelapor")
	private String kodePelapor;

	@Column(length = 3)
	@JsonProperty("Kode Jenis Fasilitas")
	private String kodeJenisFasilitas;

	@Column(length = 25)
	@JsonProperty("Nomor Rekening Fasilitas")
	private String nomorRekeningFasilitas;

	@Column(length = 25)
	@JsonProperty("Nomor Rekening Lama Fasilitas")
	private String nomorRekeningLamaFasilitas;

	@Column(length = 25)
	@JsonProperty("Nomor Cif Debitur")
	private String nomorCifDebitur;

	@Column(length = 8)
	@JsonProperty("Kode Sifat Kredit Atau Pembiayaan")
	private String kodeSifatKreditAtauPembiayaan;

	@Column(length = 8)
	@JsonProperty("Kode Jenis Kredit Atau Pembiayaan")
	private String kodeJenisKreditAtauPembiayaan;

	@Column(length = 8)
	@JsonProperty("Kode Akad Kredit Atau Akad Pembiayaan")
	private String kodeAkadKreditAtauAkadPembiayaan;

	@Column(length = 50)
	@JsonProperty("Nomor Akad Awal")
	private String nomorAkadAwal;

	@Column(length = 8)
	@JsonProperty("Tanggal Akad Awal")
	private String tanggalAkadAwal; // yyyyMMdd

	@Column(length = 50)
	@JsonProperty("Nomor Akad Akhir")
	private String nomorAkadAkhir;

	@Column(length = 8)
	@JsonProperty("Tanggal Akad Akhir")
	private String tanggalAkadAkhir; // yyyyMMdd

	@JsonProperty("Frekuensi Perpanjangan Fasilitas Kredit Atau Pembiayaan")
	private Integer frekuensiPerpanjanganFasilitasKreditAtauPembiayaan;

	@Column(length = 8)
	@JsonProperty("Tanggal Awal Kredit Atau Pembiayaan")
	private String tanggalAwalKreditAtauPembiayaan; // yyyyMMdd

	@Column(length = 8)
	@JsonProperty("Tanggal Mulai")
	private String tanggalMulai; // yyyyMMdd

	@Column(length = 8)
	@JsonProperty("Tanggal Jatuh Tempo")
	private String tanggalJatuhTempo; // yyyyMMdd

	@Column(length = 8)
	@JsonProperty("Kode Kategori Debitur")
	private String kodeKategoriDebitur;

	@Column(length = 8)
	@JsonProperty("Kode Jenis Penggunaan")
	private String kodeJenisPenggunaan;

	@Column(length = 8)
	@JsonProperty("Kode Orientasi Penggunaan")
	private String kodeOrientasiPenggunaan;

	@Column(length = 8)
	@JsonProperty("Kode Sektor Ekonomi")
	private String kodeSektorEkonomi;

	@Column(length = 8)
	@JsonProperty("Kode Kabupaten Atau Kota Lokasi Proyek Atau Penggunaan Kredit Atau Pembiayaan")
	private String kodeKabupatenAtauKotaLokasiProyekAtauPenggunaanKreditA;

	@JsonProperty("Nilai Proyek")
	private BigDecimal nilaiProyek;

	@Column(length = 8)
	@JsonProperty("Kode Valuta")
	private String kodeValuta;

	@JsonProperty("Suku Bunga Atau Imbalan")
	private Float sukuBungaAtauImbalan;

	@Column(length = 8)
	@JsonProperty("Jenis Suku Bunga Atau Imbalan")
	private String jenisSukuBungaAtauImbalan;

	@Column(length = 8)
	@JsonProperty("Kredit Atau Pembiayaan Program Pemerintah")
	private String kreditAtauPembiayaanProgramPemerintah;

	@JsonProperty("Plafon Awal")
	private BigDecimal plafonAwal;

	@JsonProperty("plafon")
	private BigDecimal plafon;

	@JsonProperty("Realisasi Atau Pencairan Bulan Berjalan")
	private BigDecimal realisasiAtauPencairanBulanBerjalan;

	@JsonProperty("Denda")
	private BigDecimal denda;

	@JsonProperty("Baki Debit")
	private BigDecimal bakiDebit;

	@JsonProperty("Nilai Dalam Mata Uang Asal")
	private BigDecimal nilaiDalamMataUangAsal;

	@Column(length = 8)
	@JsonProperty("Kode Kualitas Kredit Atau Pembiayaan")
	private String kodeKualitasKreditAtauPembiayaan;

	@Column(length = 8)
	@JsonProperty("Tanggal Macet")
	private String tanggalMacet;

	@Column(length = 8)
	@JsonProperty("Kode Sebab Macet")
	private String kodeSebabMacet;

	@JsonProperty("Tunggakan Pokok")
	private BigDecimal tunggakanPokok;

	@JsonProperty("Tunggakan Bunga Atau Imbalan")
	private BigDecimal tunggakanBungaAtauImbalan;

	@JsonProperty("Jumlah Hari Tunggakan")
	private Integer jumlahHariTunggakan;

	@JsonProperty("Frekuensi Tunggakan")
	private Integer frekuensiTunggakan;

	@JsonProperty("Frekuensi Restrukturisasi")
	private Integer frekuensiRestrukturisasi;

	@Column(length = 8)
	@JsonProperty("Tanggal Restrukturisasi Awal")
	private String tanggalRestrukturisasiAwal;

	@Column(length = 8)
	@JsonProperty("Tanggal Restrukturisasi Akhir")
	private String tanggalRestrukturisasiAkhir;

	@Column(length = 8)
	@JsonProperty("Kode Cara Restrukturisasi")
	private String kodeCaraRestrukturisasi;

	@Column(length = 8)
	@JsonProperty("Kode Kondisi")
	private String kodeKondisi;

	@Column(length = 8)
	@JsonProperty("Tanggal Kondisi")
	private String tanggalKondisi;

	@Column(length = 300)
	@JsonProperty("Keterangan")
	private String keterangan;

	@Column(length = 8)
	@JsonProperty("Kode Kantor Cabang")
	private String kodeKantorCabang;

	@Column(length = 1)
	@JsonProperty("Operasi Data")
	private String operasiData;

	@Column(length = 1)
	@JsonProperty("Status Delete")
	private String statusDelete;

	@Column(length = 20)
	@JsonProperty("Create Date")
	private String createDate;

	@Column(length = 20)
	@JsonProperty("Update Date")
	private String updateDate;

}
