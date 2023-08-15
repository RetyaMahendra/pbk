export interface Individu {
  "Alamat": string | undefined;
  "Alamat Tempat Bekerja": string | undefined;
  "Alamat e-mail": string | undefined;
  "Create Date": string | undefined;
  "Jenis Identitas": string | undefined;
  "Jenis Kelamin": string | undefined;
  "Kecamatan": string | undefined;
  "Kelurahan": string | undefined;
  "Kode Bidang Usaha Tempat Kerja": string | undefined;
  "Kode Golongan Debitur": string | undefined;
  "Kode Jenis Pelapor": string | undefined;
  "Kode Kabupaten atau Kota": string | undefined;
  "Kode Kantor Cabang": string | undefined;
  "Kode Negara Domisili": string | undefined;
  "Kode Pekerjaan": string | undefined;
  "Kode Pelapor": string | undefined;
  "Kode Pos": string | undefined;
  "Kode Status Pendidikan atau Gelar Debitur": string | undefined;
  "NPWP": string | undefined;
  "Nama Gadis Ibu Kandung": string | undefined;
  "Nama Lengkap": string | undefined;
  "Nama Sesuai Identitas": string | undefined;
  "Nomor CIF Debitur": string | undefined;
  "Nomor CIF Lama Debitur": string | undefined;
  "Nomor Identitas": string | undefined;
  "Nomor Telepon": string | undefined;
  "Nomor Telepon Seluler": string | undefined;
  "Operasi Data": string | undefined;
  "Status Perkawinan Debitur": string | undefined;
  "Status delete": string | undefined;
  "Tanggal Lahir": string | undefined;
  "Tempat Bekerja": string | undefined;
  "Tempat Lahir": string | undefined;
  "Update Date": string | undefined;
  "snapshotDate": string | undefined;
}

export interface Credit {
  "Baki Debit": number | undefined;
  "Create Date": string | undefined;
  "Denda": number | undefined;
  "Frekuensi Perpanjangan Fasilitas Kredit atau Pembiayaan": number | undefined;
  "Frekuensi Restrukturisasi": number | undefined;
  "Frekuensi Tunggakan": number | undefined;
  "Jenis Suku Bunga atau Imbalan": string | undefined;
  "Jumlah Hari Tunggakan": number | undefined;
  "Keterangan": string | undefined;
  "Kode Akad Kredit atau Akad Pembiayaan": string | undefined;
  "Kode Cara Restrukturisasi": string | undefined;
  "Kode Jenis Fasilitas": string | undefined;
  "Kode Jenis Kredit atau Pembiayaan": string | undefined;
  "Kode Jenis Pelapor": string | undefined;
  "Kode Jenis Penggunaan": string | undefined;
  "Kode Kabupaten atau Kota Lokasi Proyek atau Penggunaan Kredit Atau Pembiayaan": string | undefined;
  "Kode Kantor Cabang": string | undefined;
  "Kode Kategori Debitur": string | undefined;
  "Kode Kondisi": string | undefined;
  "Kode Kualitas Kredit atau Pembiayaan": string | undefined;
  "Kode Orientasi Penggunaan": string | undefined;
  "Kode Pelapor": string | undefined;
  "Kode Sebab Macet": string | undefined;
  "Kode Sektor Ekonomi": string | undefined;
  "Kode Sifat Kredit atau Pembiayaan": string | undefined;
  "Kode Valuta": string | undefined;
  "Kredit atau Pembiayaan Program Pemerintah": number | undefined;
  "Nilai Dalam Mata Uang Asal": number | undefined;
  "Nilai Proyek": number | undefined;
  "Nomor Akad Akhir": string | undefined;
  "Nomor Akad Awal": string | undefined;
  "Nomor Cif Debitur": string | undefined;
  "Nomor Rekening Fasilitas": string | undefined;
  "Nomor Rekening Lama Fasilitas": null;
  "Operasi Data": string | undefined;
  "Plafon": number | undefined;
  "Plafon Awal": number | undefined;
  "Realisasi atau Pencairan Bulan Berjalan": number | undefined;
  "Status Delete": string | undefined;
  "Suku Bunga atau Imbalan": number | undefined;
  "Tanggal Akad Akhir": string | undefined;
  "Tanggal Akad Awal": string | undefined;
  "Tanggal Awal Kredit atau Pembiayaan": string | undefined;
  "Tanggal Jatuh Tempo": string | undefined;
  "Tanggal Kondisi": string | undefined;
  "Tanggal Macet": string | undefined;
  "Tanggal Mulai": string | undefined;
  "Tanggal Restrukturisasi Akhir": string | undefined;
  "Tanggal Restrukturisasi Awal": string | undefined;
  "Tunggakan Bunga atau Imbalan": number | undefined;
  "Tunggakan Pokok": number | undefined;
  "Update Date": string | undefined;
  "snapshotDate": string | undefined;
}

export interface CreditSummary {
  "Kode Jenis Pelapor": string | undefined;
  "Kode Pelapor": string | undefined;
  "Kredit": Credit[];
  "Nomor CIF Debitur": string | undefined;
}

export interface Report {
  Individu: Individu | undefined;
  KreditSummary: CreditSummary[];
}