package com.poc;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.poc.model.Debitur;

/**
 * uuid_generate_v4()
 * @author Lenovo
 *
 */
public interface DebiturRepository extends JpaRepository<Debitur, String> {
	List<Debitur> findByNomorIdentitasOrderByKodeJenisPelaporAscKodePelaporAscTahunBulanDataDescCreateDateAsc(
			String nomorIdentitas);

	Optional<Debitur> findFirst1ByNomorIdentitasOrderByTahunBulanDataDescCreateDateDesc(String nomorIdentitas);

	@Transactional
	@Modifying
	@Query(value = "insert into debitur "
			+ "(id, alamat, alamat_email, alamat_tempat_bekerja, create_date, jenis_identitas, jenis_kelamin, kecamatan, kelurahan, kode_bidang_usaha_tempat_kerja, kode_golongan_debitur, kode_jenis_pelapor, kode_kabupaten_atau_kota, kode_kantor_cabang, kode_negara_domisili, kode_pekerjaan, kode_pelapor, kode_pos, kode_status_pendidikan_atau_gelar_debitur, nama_gadis_ibu_kandung, nama_lengkap, nama_sesuai_identitas, nomor_cif_debitur, nomor_cif_lama_debitur, nomor_identitas, nomor_telepon, nomor_telepon_seluler, npwp, operasi_data, status_delete, status_perkawinan_debitur, tanggal_lahir, tempat_bekerja, tempat_lahir, update_date, tahun_bulan_data) "
			+ "values"
			+ "(gen_random_uuid(), :alamat, :alamat_email, :alamat_tempat_bekerja, :create_date, :jenis_identitas, :jenis_kelamin, :kecamatan, :kelurahan, :kode_bidang_usaha_tempat_kerja, :kode_golongan_debitur, :kode_jenis_pelapor, :kode_kabupaten_atau_kota, :kode_kantor_cabang, :kode_negara_domisili, :kode_pekerjaan, :kode_pelapor, :kode_pos, :kode_status_pendidikan_atau_gelar_debitur, :nama_gadis_ibu_kandung, :nama_lengkap, :nama_sesuai_identitas, :nomor_cif_debitur, :nomor_cif_lama_debitur, :nomor_identitas, :nomor_telepon, :nomor_telepon_seluler, :npwp, :operasi_data, :status_delete, :status_perkawinan_debitur, :tanggal_lahir, :tempat_bekerja, :tempat_lahir, :update_date, :tahun_bulan_data) "
			+ "on conflict(kode_jenis_pelapor, kode_pelapor, nomor_cif_debitur, tahun_bulan_data) do update set alamat = EXCLUDED.alamat, alamat_email = EXCLUDED.alamat_email, alamat_tempat_bekerja = EXCLUDED.alamat_tempat_bekerja , create_date = EXCLUDED.create_date, jenis_identitas = EXCLUDED.jenis_identitas, jenis_kelamin = EXCLUDED.jenis_kelamin, kecamatan = EXCLUDED.kecamatan, kelurahan = EXCLUDED.kelurahan, kode_bidang_usaha_tempat_kerja = EXCLUDED.kode_bidang_usaha_tempat_kerja, kode_golongan_debitur = EXCLUDED.kode_golongan_debitur, kode_jenis_pelapor = EXCLUDED.kode_jenis_pelapor, kode_kabupaten_atau_kota = EXCLUDED.kode_kabupaten_atau_kota, kode_kantor_cabang = EXCLUDED.kode_kantor_cabang, kode_negara_domisili = EXCLUDED.kode_negara_domisili, kode_pekerjaan = EXCLUDED.kode_pekerjaan, kode_pelapor = EXCLUDED.kode_pelapor, kode_pos = EXCLUDED.kode_pos, kode_status_pendidikan_atau_gelar_debitur = EXCLUDED.kode_status_pendidikan_atau_gelar_debitur, nama_gadis_ibu_kandung = EXCLUDED.nama_gadis_ibu_kandung, nama_lengkap = EXCLUDED.nama_lengkap, nama_sesuai_identitas = EXCLUDED.nama_sesuai_identitas, nomor_cif_debitur = EXCLUDED.nomor_cif_debitur, nomor_cif_lama_debitur = EXCLUDED.nomor_cif_lama_debitur, nomor_identitas = EXCLUDED.nomor_identitas, nomor_telepon = EXCLUDED.nomor_telepon, nomor_telepon_seluler = EXCLUDED.nomor_telepon_seluler, npwp = EXCLUDED.npwp, operasi_data = EXCLUDED.operasi_data, status_delete = EXCLUDED.status_delete, status_perkawinan_debitur = EXCLUDED.status_perkawinan_debitur, tanggal_lahir = EXCLUDED.tanggal_lahir, tempat_bekerja = EXCLUDED.tempat_bekerja, tempat_lahir = EXCLUDED.tempat_lahir, update_date = EXCLUDED.update_date, tahun_bulan_data = EXCLUDED.tahun_bulan_data where EXCLUDED.tahun_bulan_data > debitur.tahun_bulan_data or EXCLUDED.create_date > debitur.create_date", nativeQuery = true)
	void upsert(@Param(value = "alamat") String alamat, @Param(value = "alamat_email") String alamat_email,
			@Param(value = "alamat_tempat_bekerja") String alamat_tempat_bekerja,
			@Param(value = "create_date") String create_date, @Param(value = "jenis_identitas") String jenis_identitas,
			@Param(value = "jenis_kelamin") String jenis_kelamin, @Param(value = "kecamatan") String kecamatan,
			@Param(value = "kelurahan") String kelurahan,
			@Param(value = "kode_bidang_usaha_tempat_kerja") String kode_bidang_usaha_tempat_kerja,
			@Param(value = "kode_golongan_debitur") String kode_golongan_debitur,
			@Param(value = "kode_jenis_pelapor") String kode_jenis_pelapor,
			@Param(value = "kode_kabupaten_atau_kota") String kode_kabupaten_atau_kota,
			@Param(value = "kode_kantor_cabang") String kode_kantor_cabang,
			@Param(value = "kode_negara_domisili") String kode_negara_domisili,
			@Param(value = "kode_pekerjaan") String kode_pekerjaan, @Param(value = "kode_pelapor") String kode_pelapor,
			@Param(value = "kode_pos") String kode_pos,
			@Param(value = "kode_status_pendidikan_atau_gelar_debitur") String kode_status_pendidikan_atau_gelar_debitur,
			@Param(value = "nama_gadis_ibu_kandung") String nama_gadis_ibu_kandung,
			@Param(value = "nama_lengkap") String nama_lengkap,
			@Param(value = "nama_sesuai_identitas") String nama_sesuai_identitas,
			@Param(value = "nomor_cif_debitur") String nomor_cif_debitur,
			@Param(value = "nomor_cif_lama_debitur") String nomor_cif_lama_debitur,
			@Param(value = "nomor_identitas") String nomor_identitas,
			@Param(value = "nomor_telepon") String nomor_telepon,
			@Param(value = "nomor_telepon_seluler") String nomor_telepon_seluler, @Param(value = "npwp") String npwp,
			@Param(value = "operasi_data") String operasi_data, @Param(value = "status_delete") String status_delete,
			@Param(value = "status_perkawinan_debitur") String status_perkawinan_debitur,
			@Param(value = "tanggal_lahir") String tanggal_lahir,
			@Param(value = "tempat_bekerja") String tempat_bekerja, @Param(value = "tempat_lahir") String tempat_lahir,
			@Param(value = "update_date") String update_date,
			@Param(value = "tahun_bulan_data") String tahun_bulan_data);
}
