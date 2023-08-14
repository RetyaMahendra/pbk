package com.poc.model.online;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class History {
	private String kodeJenisPelapor;
	private String kodePelapor;
	private String tahunBulanData;
	private String kodeJenisFasilitas;
	private String nomorRekeningFasilitas;
	private String nomorRekeningLamaFasilitas;
	private String nomorCIFDebitur;
	private String kodeSifatKreditatauPembiayaan;
	private String kodeJenisKreditatauPembiayaan;
	private String kodeAkadKreditatauAkadPembiayaan;
	private String nomorAkadAwal;
	private String tanggalAkadAwal;
	private String nomorAkadAkhir;
	private String tanggalAkadAkhir;
	private String frekuensiPerpanjanganFasilitasKreditatauPembiayaan;
	private String tanggalAwalKreditatauPembiayaan;
	private String tanggalMulai;
	private String tanggalJatuhTempo;
	private String kodeKategoriDebitur;
	private String kodeJenisPenggunaan;
	private String kodeOrientasiPenggunaan;
	private String kodeSektorEkonomi;
	private String kodeKabupatenatauKotaLokasiProyekatauPenggunaanKreditAtauPembiayaan;
	private String nilaiProyek;
	private String kodeValuta;
	private String sukuBungaatauImbalan;
	private String jenisSukuBungaatauImbalan;
	private String kreditatauPembiayaanProgramPemerintah;
	private String plafonAwalprivate;
	private String plafonprivate;
	private String realisasiatauPencairanBulanBerjalan;
	private String denda;
	private String bakiDebit;
	private String nilaiDalamMataUangAsal;
	private String kodeKualitasKreditatauPembiayaan;
	private String tanggalMacet;
	private String kodeSebabMacet;
	private String tunggakanPokok;
	private String tunggakanBungaatauImbalan;
	private String jumlahHariTunggakan;
	private String frekuensiTunggakan;
	private String frekuensiRestrukturisasi;
	private String tanggalRestrukturisasiAwal;
	private String tanggalRestrukturisasiAkhir;
	private String kodeCaraRestrukturisasi;
	private String kodeKondisi;
	private String tanggalKondisi;
	private String keterangan;
	private String kodeKantorCabang;
	private String operasiData;
	private String statusdelete;
	private String oreateDate;
	private String updateDate;
}
