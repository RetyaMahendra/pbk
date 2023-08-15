import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import { Report } from '../redux/report/reportModel';

const robotoBold: string = `${process.env.PUBLIC_URL}/assets/fonts/Roboto-Bold.ttf`;

Font.register({ family: 'Roboto-Bold', format: 'truetype', src: robotoBold });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: '2cm 1cm 1cm 1cm',
  },
  section: {
    flexGrow: 1,
  },
  dataPokokDebitur: {
    borderBottom: '1px',
    borderBottomColor: 'red',
  },
  dataPokokDebiturText: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 5,
  },
  penyajianInformasi: {
    marginVertical: 5,
  },
  penyajianInformasiText: {
    marginHorizontal: 5,
    fontSize: 8,
    fontStyle: 'italic',
    fontFamily: 'Helvetica-Oblique',
  },
  identitas: {
    borderTop: '1px',
    borderTopColor: 'red',
    backgroundColor: '#f2f2f2',
  },
  containerMainIdentitas: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  mainIdentitas: {
    paddingHorizontal: 5,
    flex: 1,
  },
  mainIdentitasTitle: {
    fontSize: 6,
    color: 'red',
  },
  mainIndentitasValue: {
    fontSize: 8,
    color: '#706476',
  },
  table: {
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: '#d9d9d9',
    fontSize: 6,
    flexDirection: 'row',
  },
  tableRow: {
    fontSize: 8,
    flexDirection: 'row',
    borderBottom: '1px',
    borderBottomColor: '#d9d9d9',
  },
  tableCell: {
    padding: 5,
    flex: 1,
    color: '#706476',
  },
  textTable: {
    fontSize: 6,
  },
  kreditPembiayaan: {
    backgroundColor: 'red',
  },
  kreditPembiayaanText: {
    color: '#FFF',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  tableRekening: {
    fontSize: 6,
    flexDirection: 'row',
    borderBottom: '1px',
    borderBottomColor: '#d9d9d9',
  },
  tableRekeningHeader: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    color: '#706476',
    padding: 2,
  },
  tableRekeningRow: {
    flex: 1,
    color: '#706476',
    padding: 2,
  },
});

interface DocumentProps {
  report?: Report | undefined;
}

const DocumentToPdf2 = (props: DocumentProps): JSX.Element => {
  const { report } = props;

  // const getLast12Months = (currentDate: string | undefined): string[] => {
  //   const today = moment(currentDate); // get current date/time using Moment.js
  //   const last12Months: string[] = [];

  //   // loop through the last 12 months, adding each one to the array
  //   for (let i = 0; i < 12; i++) {
  //     const month = today.clone().subtract(i, 'months');
  //     last12Months.push(month.format('MMM YY')); // format the month using Moment.js and add it to the array
  //   }

  //   return last12Months;
  // }

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
                  {report?.Individu?.['Nama Sesuai Identitas']}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>Identitas</Text>
                <Text style={styles.mainIndentitasValue}>
                  NIK / {report?.Individu?.['Nomor Identitas']}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Jenis Kelamin / NPWP
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.['Jenis Kelamin']} /{' '}
                  {report?.Individu?.NPWP}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Tempat / TGL Lahir
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.['Tempat Lahir']}
                </Text>
              </View>
              <View style={styles.mainIdentitas}>
                <Text style={styles.mainIdentitasTitle}>
                  Pelapor / Tanggal Update
                </Text>
                <Text style={styles.mainIndentitasValue}>
                  {report?.Individu?.['Kode Pelapor']} /{' '}
                  {report?.Individu?.['Update Date']}
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
                    {report?.Individu?.['Kode Kabupaten atau Kota']}
                  </Text>
                </View>
                <View style={[styles.tableCell, { maxWidth: 50 }]}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.['Kode Pos']}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.['Kode Negara Domisili']}
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
                    {report?.Individu?.['Kode Pekerjaan']}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.['Tempat Bekerja']}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {report?.Individu?.['Kode Bidang Usaha Tempat Kerja']}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.textTable}>
                    {
                      report?.Individu?.[
                        'Kode Status Pendidikan atau Gelar Debitur'
                      ]
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocumentToPdf2;
