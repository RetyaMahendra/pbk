import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";
import { NumberFormat } from "./numberFormat";
import { Credit, CreditSummary, Report } from "../redux/report/reportModel";

const robotoBold: string = `${process.env.PUBLIC_URL}/assets/fonts/Roboto-Bold.ttf`;

Font.register({ family: "Roboto-Bold", format: "truetype", src: robotoBold });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: "2cm 1cm 1cm 1cm",
  },
  section: {
    flexGrow: 1,
  },
  dataPokokDebitur: {
    borderBottom: "1px",
    borderBottomColor: "red",
  },
  dataPokokDebiturText: {
    fontSize: 12,
    color: "red",
    marginHorizontal: 5,
  },
  penyajianInformasi: {
    marginVertical: 5,
  },
  penyajianInformasiText: {
    marginHorizontal: 5,
    fontSize: 8,
    fontStyle: "italic",
    fontFamily: "Helvetica-Oblique",
  },
  identitas: {
    borderTop: "1px",
    borderTopColor: "red",
    backgroundColor: "#f2f2f2",
  },
  containerMainIdentitas: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  mainIdentitas: {
    paddingHorizontal: 5,
    flex: 1,
  },
  mainIdentitasTitle: {
    fontSize: 6,
    color: "red",
  },
  mainIndentitasValue: {
    fontSize: 8,
    color: "#706476",
  },
  table: {
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: "#d9d9d9",
    fontSize: 6,
    flexDirection: "row",
  },
  tableRow: {
    fontSize: 8,
    flexDirection: "row",
    borderBottom: "1px",
    borderBottomColor: "#d9d9d9",
  },
  tableCell: {
    padding: 5,
    flex: 1,
    color: "#706476",
  },
  textTable: {
    fontSize: 6,
  },
  kreditPembiayaan: {
    backgroundColor: "red",
  },
  kreditPembiayaanText: {
    color: "#FFF",
    fontWeight: "bold",
    padding: 5,
    fontSize: 12,
    fontFamily: "Roboto-Bold",
  },
  tableRekening: {
    fontSize: 6,
    flexDirection: "row",
    borderBottom: "1px",
    borderBottomColor: "#d9d9d9",
  },
  tableRekeningHeader: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    color: "#706476",
    padding: 2,
  },
  tableRekeningRow: {
    flex: 1,
    color: "#706476",
    padding: 2,
  },
});

interface DocumentProps {
  report?: Report | undefined;
}

const DocumentToPdf = (props: DocumentProps): JSX.Element => {
  const { report } = props;

  const getLast12Months = (currentDate: string | undefined): string[] => {
    const today = moment(currentDate); // get current date/time using Moment.js
    const last12Months: string[] = [];

    // loop through the last 12 months, adding each one to the array
    for (let i = 0; i < 12; i++) {
      const month = today.clone().subtract(i, "months");
      last12Months.push(month.format("MMM YY")); // format the month using Moment.js and add it to the array
    }

    return last12Months;
  };

  return (
    <Document>
      <Page size='LETTER' wrap style={styles.page}>
        <View style={styles.section}>
          <View style={styles.dataPokokDebitur}>
            <Text style={styles.dataPokokDebiturText}>Data Pokok Debitur</Text>
          </View>
          <View style={styles.penyajianInformasi}>
            <Text style={styles.penyajianInformasiText}>
              Penyajian informasi debitur pada Sistem Layanan Informasi Keuangan
              dikelompokan berdasarkan nomor identitas debitur. Pengguna
              informasi diharapkan dapat meneliti kembali kemungkinan adanya
              debitur berbeda yang dilaporkan menggunakan nomor identitas yang
              sama
            </Text>
          </View>
          <View style={styles.identitas}>
            <View style={styles.containerMainIdentitas}>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Nama Sesuai Identitas
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.["Nama Sesuai Identitas"]}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>Identitas</Text>
                <Text style={styles.mainIndentitasValue}>
                  NIK / {report?.Individu?.["Nomor Identitas"]}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Jenis Kelamin / NPWP
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.["Jenis Kelamin"]} /{" "}
                  {report?.Individu?.NPWP}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Tempat / TGL Lahir
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.["Tempat Lahir"]}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Pelapor / Tanggal Update
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.["Kode Pelapor"]} /{" "}
                  {report?.Individu?.["Update Date"]}
                </Text>
              </View>
            </View>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <View style={[styles.tableCell, { minWidth: 100 }]}>
                  <Text>Alamat</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Kelurahan</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Kecamatan</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Kabupaten / Kota</Text>
                </View>
                <View style={[styles.tableCell, { maxWidth: 50 }]}>
                  <Text>Kode Pos</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Negara</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, { minWidth: 100 }]}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.Alamat}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.Kelurahan}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.Kecamatan}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Kode Kabupaten atau Kota"]}
                  </Text>
                </View>
                <View style={[styles.tableCell, { maxWidth: 50 }]}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Kode Pos"]}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Kode Negara Domisili"]}
                  </Text>
                </View>
              </View>
              <View style={styles.tableHeader}>
                <View style={styles.tableCell}>
                  <Text>Pekerjaan</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Tempat Bekerja</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Bidang Usaha</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>Status Gelar Debitur</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Kode Pekerjaan"]}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Tempat Bekerja"]}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.["Kode Bidang Usaha Tempat Kerja"]}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {
                      report?.Individu?.[
                        "Kode Status Pendidikan atau Gelar Debitur"
                      ]
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Batas atas looping Kredit Summary */}
          {report?.KreditSummary.map((value: CreditSummary, index: number) => {
            let totalBakiDebit: number = 0;
            let totalPlafon: number = 0;
            let worstQuality: Credit | undefined;
            let latestCredit: Credit | undefined;

            value.Kredit.forEach((data: Credit) => {
              if (data?.["Baki Debit"]) {
                totalBakiDebit += data?.["Baki Debit"];
              }
              if (data?.Plafon) {
                totalPlafon += data?.Plafon;
              }
              if (data?.["Kode Kualitas Kredit atau Pembiayaan"]) {
              }
            });
            worstQuality = value.Kredit.reduce((prev, current) => {
              if (
                prev["Kode Kualitas Kredit atau Pembiayaan"] &&
                current["Kode Kualitas Kredit atau Pembiayaan"]
              ) {
                return prev["Kode Kualitas Kredit atau Pembiayaan"] >
                  current["Kode Kualitas Kredit atau Pembiayaan"]
                  ? prev
                  : current;
              }
              return prev;
            });
            latestCredit = value.Kredit.reduce((prev, current) => {
              if (prev["Create Date"] && current["Create Date"]) {
                return prev["Create Date"] > current["Create Date"]
                  ? prev
                  : current;
              }
              return prev;
            });

            return (
              <View break={index > 0} key={index}>
                <View style={[styles.dataPokokDebitur, { marginVertical: 10 }]}>
                  <Text style={styles.dataPokokDebiturText}>
                    Ringkasan Fasilitas
                  </Text>
                </View>
                <View style={styles.table}>
                  <View style={styles.tableHeader}>
                    <View style={styles.tableCell}>
                      <Text>Fasilitas</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Kredit/Pembiayaan (dalam IDR)</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Irrevocable L/C (dalam IDR)</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Garansi Yang Diberikan (dalam IDR)</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Fasilitas Lain (dalam IDR)</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Total (dalam IDR)</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text>Kualitas terburuk / Bulan Data</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>Plafon Efektif</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>
                        {totalPlafon ? NumberFormat(totalPlafon) : ""}
                      </Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>
                        {totalPlafon ? NumberFormat(totalPlafon) : ""}
                      </Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>
                        {worstQuality?.["Kode Kualitas Kredit atau Pembiayaan"]}{" "}
                        / {worstQuality?.["Update Date"]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>Baki Debet</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>
                        {totalBakiDebit
                          ? NumberFormat(totalBakiDebit)
                          : "Rp 0,00"}
                      </Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>0,00</Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}>
                        {totalBakiDebit
                          ? NumberFormat(totalBakiDebit)
                          : "Rp 0,00"}
                      </Text>
                    </View>
                    <View style={styles.tableCell}>
                      <Text style={styles.textTable}></Text>
                    </View>
                  </View>
                </View>
                <View style={styles.kreditPembiayaan}>
                  <Text style={styles.kreditPembiayaanText}>
                    Kredit / Pembiayaan
                  </Text>
                </View>
                <View style={{ marginTop: 5 }}>
                  <View style={[styles.table, { backgroundColor: "#f2f2f2" }]}>
                    <View
                      style={[
                        styles.tableHeader,
                        {
                          backgroundColor: "#f2f2f2",
                          borderTop: "1px",
                          borderTopColor: "red",
                        },
                      ]}>
                      <View style={styles.tableCell}>
                        <Text>Pelapor</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>Cabang</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>Baki Debet</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>Tanggal Update</Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableCell}>
                        <Text>{latestCredit?.["Kode Pelapor"]}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>{latestCredit?.["Kode Kantor Cabang"]}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>
                          {totalBakiDebit
                            ? NumberFormat(totalBakiDebit)
                            : "Rp 0,00"}
                        </Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text>{latestCredit?.["Update Date"]}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={{ fontSize: 6, color: "#706476" }}>
                        Kualitas / Jumlah Hari Tunggakan
                      </Text>
                    </View>
                    {getLast12Months(
                      latestCredit?.["Create Date"]?.slice(0, 8)
                    ).map((text: string, index: number) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: "column",
                          flex: 1,
                          padding: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 6,
                            fontWeight: "bold",
                            width: "100%",
                            textAlign: "center",
                          }}>
                          {text}
                        </Text>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                          <Text
                            style={{
                              flex: 1,
                              textAlign: "center",
                              color: "#706476",
                              fontSize: 6,
                              borderBottom: "1px",
                              borderBottomColor: "#d9d9d9",
                              borderLeft: "1px",
                              borderLeftColor: "#d9d9d9",
                              borderRight: "1px",
                              borderRightColor: "#d9d9d9",
                            }}>
                            1
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              textAlign: "center",
                              color: "#706476",
                              fontSize: 6,
                              borderBottom: "1px",
                              borderBottomColor: "#d9d9d9",
                              borderLeft: "1px",
                              borderLeftColor: "#d9d9d9",
                              borderRight: "1px",
                              borderRightColor: "#d9d9d9",
                            }}>
                            0
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>No Rekening</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Nomor Rekening Fasilitas"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Kualitas</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Kode Kualitas Kredit atau Pembiayaan"]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Sifat Kredit/Pembiayaan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Kode Sifat Kredit atau Pembiayaan"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Jumlah Hari Tunggakan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Jumlah Hari Tunggakan"]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Jenis Kredit/Pembiayaan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Kode Jenis Kredit atau Pembiayaan"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Nilai Proyek</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Nilai Proyek"]
                          ? NumberFormat(latestCredit?.["Nilai Proyek"])
                          : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Akad Kredit/Pembiayaan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {
                          latestCredit?.[
                            "Kode Akad Kredit atau Akad Pembiayaan"
                          ]
                        }
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Plafon Awal</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {totalPlafon ? NumberFormat(totalPlafon) : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Frekuensi Perpanjangan Kredit/Pembiayaan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {
                          latestCredit?.[
                            "Frekuensi Perpanjangan Fasilitas Kredit atau Pembiayaan"
                          ]
                        }
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Plafon</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {totalPlafon ? NumberFormat(totalPlafon) : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>No Akad Awal</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Nomor Akad Akhir"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Realisasi/Pencairan Bulan Berjalan
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.[
                          "Realisasi atau Pencairan Bulan Berjalan"
                        ]
                          ? NumberFormat(
                              latestCredit?.[
                                "Realisasi atau Pencairan Bulan Berjalan"
                              ]
                            )
                          : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tanggal Akad Awal</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tanggal Akad Awal"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>
                        Nilai Dalam Mata Uang Asal
                      </Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Nilai Dalam Mata Uang Asal"]
                          ? NumberFormat(
                              latestCredit?.["Nilai Dalam Mata Uang Asal"]
                            )
                          : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>No Akad Akhir</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Nomor Akad Akhir"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Sebab Macet</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Kode Sebab Macet"]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tanggal Akad Akhir</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tanggal Akad Akhir"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tanggal Macet</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tanggal Macet"]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tanggal Awal Kredit</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tanggal Awal Kredit atau Pembiayaan"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tunggakan Pokok</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tunggakan Pokok"]
                          ? NumberFormat(latestCredit?.["Tunggakan Pokok"])
                          : "Rp 0,00"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRekening}>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tanggal Mulai</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tanggal Mulai"]}
                      </Text>
                    </View>
                    <View style={styles.tableRekeningHeader}>
                      <Text style={styles.textTable}>Tunggakan Bunga</Text>
                    </View>
                    <View style={styles.tableRekeningRow}>
                      <Text style={styles.textTable}>
                        {latestCredit?.["Tunggakan Bunga atau Imbalan"]}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Tanggal Jatuh Tempo
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Tanggal Jatuh Tempo"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Frekuensi Tunggakan
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Frekuensi Tunggakan"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Kategori Debitur</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Kategori Debitur"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Denda</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.Denda}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Jenis Penggunaan</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Jenis Penggunaan"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Frekuensi Restrukturisasi
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Frekuensi Restrukturisasi"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Sektor Ekonomi</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Sektor Ekonomi"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Tanggal Restrukturisasi Akhir
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Tanggal Restrukturisasi Akhir"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Kredit Program Pemerintah
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {
                            latestCredit?.[
                              "Kredit atau Pembiayaan Program Pemerintah"
                            ]
                          }
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Cara Restrukturisasi
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Cara Restrukturisasi"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Kab/Kota Lokasi Proyek
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {
                            latestCredit?.[
                              "Kode Kabupaten atau Kota Lokasi Proyek atau Penggunaan Kredit Atau Pembiayaan"
                            ]
                          }
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Kondisi</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Kondisi"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Valuta</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Kode Valuta"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Tanggal Kondisi</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Tanggal Kondisi"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Suku Bunga Imbalan</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Suku Bunga atau Imbalan"]}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>
                          Jenis Suku Bunga / Imbalan
                        </Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.["Jenis Suku Bunga atau Imbalan"]}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRekening}>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}>Keterangan</Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}>
                          {latestCredit?.Keterangan}
                        </Text>
                      </View>
                      <View style={styles.tableRekeningHeader}>
                        <Text style={styles.textTable}></Text>
                      </View>
                      <View style={styles.tableRekeningRow}>
                        <Text style={styles.textTable}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          {/* Batas Bawah looping Kredit Summary */}
        </View>
      </Page>
    </Document>
  );
};

export default DocumentToPdf;
