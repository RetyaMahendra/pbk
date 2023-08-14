package com.poc;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.poc.model.Kredit;
/**
 * uuid_generate_v4()
 * @author Lenovo
 *
 */
public interface KreditRepository extends JpaRepository<Kredit, String> {

	@Transactional
	@Modifying
	@Query(value = "insert into kredit "
			+ "(id, baki_debit, create_date, denda, frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan, frekuensi_restrukturisasi, frekuensi_tunggakan, jenis_suku_bunga_atau_imbalan, jumlah_hari_tunggakan, keterangan, kode_akad_kredit_atau_akad_pembiayaan, kode_cara_restrukturisasi, kode_jenis_fasilitas, kode_jenis_kredit_atau_pembiayaan, kode_jenis_pelapor, kode_jenis_penggunaan, kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita, kode_kantor_cabang, kode_kategori_debitur, kode_kondisi, kode_kualitas_kredit_atau_pembiayaan, kode_orientasi_penggunaan, kode_pelapor, kode_sebab_macet, kode_sektor_ekonomi, kode_sifat_kredit_atau_pembiayaan, kode_valuta, kredit_atau_pembiayaan_program_pemerintah, nilai_dalam_mata_uang_asal, nilai_proyek, nomor_akad_akhir, nomor_akad_awal, nomor_cif_debitur, nomor_rekening_fasilitas, nomor_rekening_lama_fasilitas, operasi_data, plafon, plafon_awal, realisasi_atau_pencairan_bulan_berjalan, status_delete, suku_bunga_atau_imbalan, tanggal_akad_akhir, tanggal_akad_awal, tanggal_awal_kredit_atau_pembiayaan, tanggal_jatuh_tempo, tanggal_kondisi, tanggal_macet, tanggal_mulai, tanggal_restrukturisasi_akhir, tanggal_restrukturisasi_awal, tunggakan_bunga_atau_imbalan, tunggakan_pokok, update_date, tahun_bulan_data) "
			+ "values"
			+ "(gen_random_uuid(), :baki_debit, :create_date, :denda, :frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan, :frekuensi_restrukturisasi, :frekuensi_tunggakan, :jenis_suku_bunga_atau_imbalan, :jumlah_hari_tunggakan, :keterangan, :kode_akad_kredit_atau_akad_pembiayaan, :kode_cara_restrukturisasi, :kode_jenis_fasilitas, :kode_jenis_kredit_atau_pembiayaan, :kode_jenis_pelapor, :kode_jenis_penggunaan, :kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita, :kode_kantor_cabang, :kode_kategori_debitur, :kode_kondisi, :kode_kualitas_kredit_atau_pembiayaan, :kode_orientasi_penggunaan, :kode_pelapor, :kode_sebab_macet, :kode_sektor_ekonomi, :kode_sifat_kredit_atau_pembiayaan, :kode_valuta, :kredit_atau_pembiayaan_program_pemerintah, :nilai_dalam_mata_uang_asal, :nilai_proyek, :nomor_akad_akhir, :nomor_akad_awal, :nomor_cif_debitur, :nomor_rekening_fasilitas, :nomor_rekening_lama_fasilitas, :operasi_data, :plafon, :plafon_awal, :realisasi_atau_pencairan_bulan_berjalan, :status_delete, :suku_bunga_atau_imbalan, :tanggal_akad_akhir, :tanggal_akad_awal, :tanggal_awal_kredit_atau_pembiayaan, :tanggal_jatuh_tempo, :tanggal_kondisi, :tanggal_macet, :tanggal_mulai, :tanggal_restrukturisasi_akhir, :tanggal_restrukturisasi_awal, :tunggakan_bunga_atau_imbalan, :tunggakan_pokok, :update_date, :tahun_bulan_data) "
			+ "on conflict(kode_jenis_pelapor, kode_pelapor, nomor_cif_debitur, nomor_rekening_fasilitas, tahun_bulan_data) do update set baki_debit = EXCLUDED.baki_debit, create_date = EXCLUDED.create_date, denda = EXCLUDED.denda, frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan = EXCLUDED.frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan, frekuensi_restrukturisasi = EXCLUDED.frekuensi_restrukturisasi, frekuensi_tunggakan = EXCLUDED.frekuensi_tunggakan, jenis_suku_bunga_atau_imbalan = EXCLUDED.jenis_suku_bunga_atau_imbalan, jumlah_hari_tunggakan = EXCLUDED.jumlah_hari_tunggakan, keterangan = EXCLUDED.keterangan, kode_akad_kredit_atau_akad_pembiayaan = EXCLUDED.kode_akad_kredit_atau_akad_pembiayaan, kode_cara_restrukturisasi = EXCLUDED.kode_cara_restrukturisasi, kode_jenis_fasilitas = EXCLUDED.kode_jenis_fasilitas, kode_jenis_kredit_atau_pembiayaan = EXCLUDED.kode_jenis_kredit_atau_pembiayaan, kode_jenis_pelapor = EXCLUDED.kode_jenis_pelapor, kode_jenis_penggunaan = EXCLUDED.kode_jenis_penggunaan, kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita = EXCLUDED.kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita, kode_kantor_cabang = EXCLUDED.kode_kantor_cabang, kode_kategori_debitur = EXCLUDED.kode_kategori_debitur, kode_kondisi = EXCLUDED.kode_kondisi, kode_kualitas_kredit_atau_pembiayaan = EXCLUDED.kode_kualitas_kredit_atau_pembiayaan, kode_orientasi_penggunaan = EXCLUDED.kode_orientasi_penggunaan, kode_pelapor = EXCLUDED.kode_pelapor, kode_sebab_macet = EXCLUDED.kode_sebab_macet, kode_sektor_ekonomi = EXCLUDED.kode_sektor_ekonomi, kode_sifat_kredit_atau_pembiayaan = EXCLUDED.kode_sifat_kredit_atau_pembiayaan, kode_valuta = EXCLUDED.kode_valuta, kredit_atau_pembiayaan_program_pemerintah = EXCLUDED.kredit_atau_pembiayaan_program_pemerintah, nilai_dalam_mata_uang_asal = EXCLUDED.nilai_dalam_mata_uang_asal, nilai_proyek = EXCLUDED.nilai_proyek, nomor_akad_akhir = EXCLUDED.nomor_akad_akhir, nomor_akad_awal = EXCLUDED.nomor_akad_awal, nomor_cif_debitur = EXCLUDED.nomor_cif_debitur, nomor_rekening_fasilitas = EXCLUDED.nomor_rekening_fasilitas, nomor_rekening_lama_fasilitas = EXCLUDED.nomor_rekening_lama_fasilitas, operasi_data = EXCLUDED.operasi_data, plafon = EXCLUDED.plafon, plafon_awal = EXCLUDED.plafon_awal, realisasi_atau_pencairan_bulan_berjalan = EXCLUDED.realisasi_atau_pencairan_bulan_berjalan, status_delete = EXCLUDED.status_delete, suku_bunga_atau_imbalan = EXCLUDED.suku_bunga_atau_imbalan, tanggal_akad_akhir = EXCLUDED.tanggal_akad_akhir, tanggal_akad_awal = EXCLUDED.tanggal_akad_awal, tanggal_awal_kredit_atau_pembiayaan = EXCLUDED.tanggal_awal_kredit_atau_pembiayaan, tanggal_jatuh_tempo = EXCLUDED.tanggal_jatuh_tempo, tanggal_kondisi = EXCLUDED.tanggal_kondisi, tanggal_macet = EXCLUDED.tanggal_macet, tanggal_mulai = EXCLUDED.tanggal_mulai, tanggal_restrukturisasi_akhir = EXCLUDED.tanggal_restrukturisasi_akhir, tanggal_restrukturisasi_awal = EXCLUDED.tanggal_restrukturisasi_awal, tunggakan_bunga_atau_imbalan = EXCLUDED.tunggakan_bunga_atau_imbalan, tunggakan_pokok = EXCLUDED.tunggakan_pokok, update_date = EXCLUDED.update_date, tahun_bulan_data = EXCLUDED.tahun_bulan_data where EXCLUDED.tahun_bulan_data > kredit.tahun_bulan_data or EXCLUDED.create_date > kredit.create_date", nativeQuery = true)
	void upsert(@Param(value = "baki_debit") BigDecimal baki_debit,
			@Param(value = "create_date") String create_date, @Param(value = "denda") BigDecimal denda,
			@Param(value = "frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan") Integer frekuensi_perpanjangan_fasilitas_kredit_atau_pembiayaan,
			@Param(value = "frekuensi_restrukturisasi") Integer frekuensi_restrukturisasi,
			@Param(value = "frekuensi_tunggakan") Integer frekuensi_tunggakan,
			@Param(value = "jenis_suku_bunga_atau_imbalan") String jenis_suku_bunga_atau_imbalan,
			@Param(value = "jumlah_hari_tunggakan") Integer jumlah_hari_tunggakan,
			@Param(value = "keterangan") String keterangan,
			@Param(value = "kode_akad_kredit_atau_akad_pembiayaan") String kode_akad_kredit_atau_akad_pembiayaan,
			@Param(value = "kode_cara_restrukturisasi") String kode_cara_restrukturisasi,
			@Param(value = "kode_jenis_fasilitas") String kode_jenis_fasilitas,
			@Param(value = "kode_jenis_kredit_atau_pembiayaan") String kode_jenis_kredit_atau_pembiayaan,
			@Param(value = "kode_jenis_pelapor") String kode_jenis_pelapor,
			@Param(value = "kode_jenis_penggunaan") String kode_jenis_penggunaan,
			@Param(value = "kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita") String kode_kabupaten_atau_kota_lokasi_proyek_atau_penggunaan_kredita,
			@Param(value = "kode_kantor_cabang") String kode_kantor_cabang,
			@Param(value = "kode_kategori_debitur") String kode_kategori_debitur,
			@Param(value = "kode_kondisi") String kode_kondisi,
			@Param(value = "kode_kualitas_kredit_atau_pembiayaan") String kode_kualitas_kredit_atau_pembiayaan,
			@Param(value = "kode_orientasi_penggunaan") String kode_orientasi_penggunaan,
			@Param(value = "kode_pelapor") String kode_pelapor,
			@Param(value = "kode_sebab_macet") String kode_sebab_macet,
			@Param(value = "kode_sektor_ekonomi") String kode_sektor_ekonomi,
			@Param(value = "kode_sifat_kredit_atau_pembiayaan") String kode_sifat_kredit_atau_pembiayaan,
			@Param(value = "kode_valuta") String kode_valuta,
			@Param(value = "kredit_atau_pembiayaan_program_pemerintah") String kredit_atau_pembiayaan_program_pemerintah,
			@Param(value = "nilai_dalam_mata_uang_asal") BigDecimal nilai_dalam_mata_uang_asal,
			@Param(value = "nilai_proyek") BigDecimal nilai_proyek,
			@Param(value = "nomor_akad_akhir") String nomor_akad_akhir,
			@Param(value = "nomor_akad_awal") String nomor_akad_awal,
			@Param(value = "nomor_cif_debitur") String nomor_cif_debitur,
			@Param(value = "nomor_rekening_fasilitas") String nomor_rekening_fasilitas,
			@Param(value = "nomor_rekening_lama_fasilitas") String nomor_rekening_lama_fasilitas,
			@Param(value = "operasi_data") String operasi_data, @Param(value = "plafon") BigDecimal plafon,
			@Param(value = "plafon_awal") BigDecimal plafon_awal,
			@Param(value = "realisasi_atau_pencairan_bulan_berjalan") BigDecimal realisasi_atau_pencairan_bulan_berjalan,
			@Param(value = "status_delete") String status_delete,
			@Param(value = "suku_bunga_atau_imbalan") Float suku_bunga_atau_imbalan,
			@Param(value = "tanggal_akad_akhir") String tanggal_akad_akhir,
			@Param(value = "tanggal_akad_awal") String tanggal_akad_awal,
			@Param(value = "tanggal_awal_kredit_atau_pembiayaan") String tanggal_awal_kredit_atau_pembiayaan,
			@Param(value = "tanggal_jatuh_tempo") String tanggal_jatuh_tempo,
			@Param(value = "tanggal_kondisi") String tanggal_kondisi,
			@Param(value = "tanggal_macet") String tanggal_macet, @Param(value = "tanggal_mulai") String tanggal_mulai,
			@Param(value = "tanggal_restrukturisasi_akhir") String tanggal_restrukturisasi_akhir,
			@Param(value = "tanggal_restrukturisasi_awal") String tanggal_restrukturisasi_awal,
			@Param(value = "tunggakan_bunga_atau_imbalan") BigDecimal tunggakan_bunga_atau_imbalan,
			@Param(value = "tunggakan_pokok") BigDecimal tunggakan_pokok,
			@Param(value = "update_date") String update_date,
			@Param(value = "tahun_bulan_data") String tahun_bulan_data);
}
