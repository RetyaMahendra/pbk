package com.poc.model;

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
 *     + nomor_cif_debitur id ini diperlukan untuk digunakan sebagai
 *     distribution key pada database citus (postgres db's extension)
 * @author Lenovo
 *
 */
@Data
@AllArgsConstructor
@Entity
@Table(indexes = { @Index(name = "i_debitur", columnList = "kodeJenisPelapor, kodePelapor, nomorCifDebitur, tahunBulanData", unique = true) })
public class Debitur {

	public Debitur() {
		this.id = UUID.randomUUID();
	}

	@Id
	@GeneratedValue
	private UUID id; // uuid

	@JsonProperty("Tahun Bulan Data")
	@Column(length = 6)
	private String tahunBulanData;

	@Column(length = 4)
	@JsonProperty("Kode Jenis Pelapor")
	private String kodeJenisPelapor;

	@Column(length = 6)
	@JsonProperty("Kode Pelapor")
	private String kodePelapor;

	@Column(length = 20)
	@JsonProperty("Nomor CIF Lama Debitur")
	private String nomorCifLamaDebitur;

	@Column(length = 20)
	@JsonProperty("Nomor CIF Debitur")
	private String nomorCifDebitur;

	@Column(length = 1)
	@JsonProperty("Jenis Identitas")
	private String jenisIdentitas;

	@Column(length = 25)
	@JsonProperty("Nomor Identitas")
	private String nomorIdentitas;

	@Column(length = 128)
	@JsonProperty("Nama Sesuai Identitas")
	private String namaSesuaiIdentitas;

	@Column(length = 128)
	@JsonProperty("Nama Lengkap")
	private String namaLengkap;

	@Column(length = 2)
	@JsonProperty("Kode Status Pendidikan atau Gelar Debitur")
	private String kodeStatusPendidikanAtauGelarDebitur;

	@Column(length = 1)
	@JsonProperty("Jenis Kelamin")
	private String jenisKelamin;

	@Column(length = 128)
	@JsonProperty("Tempat Lahir")
	private String tempatLahir;

	@Column(length = 8)
	@JsonProperty("Tanggal Lahir")
	private String tanggalLahir;

	@Column(length = 128)
	@JsonProperty("Nama Gadis Ibu Kandung")
	private String namaGadisIbuKandung;

	@Column(length = 25)
	@JsonProperty("NPWP")
	private String npwp;

	@Column(length = 256)
	@JsonProperty("Alamat")
	private String alamat;

	@Column(length = 128)
	@JsonProperty("Kelurahan")
	private String kelurahan;

	@Column(length = 128)
	@JsonProperty("Kecamatan")
	private String kecamatan;

	@Column(length = 16)
	@JsonProperty("Kode Kabupaten atau Kota")
	private String kodeKabupatenAtauKota;

	@Column(length = 8)
	@JsonProperty("Kode Pos")
	private String kodePos;

	@Column(length = 64)
	@JsonProperty("Nomor Telepon")
	private String nomorTelepon;

	@Column(length = 64)
	@JsonProperty("Nomor Telepon Seluler")
	private String nomorTeleponSeluler;

	@Column(length = 128)
	@JsonProperty("Alamat Email")
	private String alamatEmail;

	@Column(length = 4)
	@JsonProperty("Kode Negara Domisili")
	private String kodeNegaraDomisili;

	@Column(length = 8)
	@JsonProperty("Kode Pekerjaan")
	private String kodePekerjaan;

	@Column(length = 128)
	@JsonProperty("Tempat Bekerja")
	private String tempatBekerja;

	@Column(length = 8)
	@JsonProperty("Kode Bidang Usaha Tempat Kerja")
	private String kodeBidangUsahaTempatKerja;

	@Column(length = 256)
	@JsonProperty("Alamat Tempat Bekerja")
	private String alamatTempatBekerja;

	@Column(length = 8)
	@JsonProperty("Kode Golongan Debitur")
	private String kodeGolonganDebitur;

	@Column(length = 1)
	@JsonProperty("Status Perkawinan Debitur")
	private String statusPerkawinanDebitur;

	@Column(length = 8)
	@JsonProperty("Kode Kantor Cabang")
	private String kodeKantorCabang;

	@Column(length = 1)
	@JsonProperty("Operasi Data")
	private String operasiData;

	@Column(length = 1)
	@JsonProperty("Status delete")
	private String statusDelete;

	@Column(length = 20)
	@JsonProperty("Create Date")
	private String createDate;

	@Column(length = 20)
	@JsonProperty("Update Date")
	private String updateDate;

}
