import {
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  PDFViewer,
  View,
  Image,
} from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import Logo from '../../images.png';

const ROW_KEYS = [
  'fasilitas',
  'kredit',
  'lc',
  'garansi',
  'fasilitasLain',
  'total',
  'kualitas',
];

const FormToPdf = () => {
  const { state } = useLocation();
  const forms = state?.listForms ?? [];

  console.log(forms);

  // Aaliyah Abbott NIK / 1050245708900002 L / 081785542123321 Kab.Subang 949 /
  // Jalan Dummy Silk 952 No.9423662348 Kab.Sampang Kelurahan Dummy 1733 Kecamatan Dummy 1733 1205 57437 ID
  // 007 Abbot Inc and Sons 0111130 01
  // Penyajian Informasi debitur pada Sistem Layanan Informasi Keuangan dikelompokan berdasarkan nomor identitas debitur. Pengguna informasi diharapkan dapat meneliti kembali kemungkinan adanya debitur berbeda yang dilaporkan menggunakan nomor identitas yang sama.

  const renderHeaderTitle = (form: any, idx: number) => (
    <View
      style={
        form.type === 'header'
          ? styles.headerContainer
          : styles.subHeaderContainer
      }
      key={idx}
    >
      <Text
        style={
          form.type === 'header' ? styles.headerText : styles.subHeaderText
        }
      >
        {form.value}
      </Text>
    </View>
  );

  const renderTableLegend = (form: any, idx: number) => (
    <View style={[styles.identitas, styles.tableWidth]} key={idx}>
      <View style={[styles.defaultRow, styles.identitasTitleColor]}>
        {form?.columns?.map((column: any, idx: number) => {
          return (
            <Text style={[styles.mainIdentitasTitle]} key={idx}>
              {column.column}
            </Text>
          );
        })}
      </View>
      <View style={[styles.defaultRow, styles.identitasTitleColor]}>
        {form?.rows?.map((row: any, idx: number) => {
          return (
            <Text style={[styles.mainIndentitasValue]} key={idx}>
              {row.row}
            </Text>
          );
        })}
      </View>
    </View>
  );

  const renderDynamicTable = (form: any, idx: number) => (
    <View style={[styles.tableWidth]} key={idx}>
      <View
        style={[
          styles.defaultRow,
          styles.detailsTitleColor,
          styles.defaultPaddingCell,
        ]}
      >
        {form.columns?.map((column: any, idx: number) => {
          return (
            <Text
              style={{
                width: `${100 / form.columns.length}%`,
                fontSize: 6,
                color: '#706476',
              }}
              key={idx}
            >
              {column.column}
            </Text>
          );
        })}
      </View>
      <View
        style={[
          styles.defaultRow,
          styles.identitasTitleColor,
          styles.defaultPaddingCell,
        ]}
      >
        {form.rows?.map((row: any, idx: number) => {
          return (
            <Text
              style={{
                width: `${100 / form.rows.length}%`,
                fontSize: 6,
                color: '#706476',
              }}
              key={idx}
            >
              {row.row}
            </Text>
          );
        })}
      </View>
    </View>
  );

  const renderFixTable = (form: any, idx: number) => (
    <View style={[styles.tableWidth, styles.marginForFixTable]} key={idx}>
      <View
        style={[
          styles.defaultRow,
          styles.detailsTitleColor,
          styles.defaultPaddingCell,
        ]}
      >
        {form?.columns?.map((column: any, idx: number) => {
          return (
            <Text
              style={{
                width: `${100 / form.columns.length}%`,
                fontSize: 6,
                color: '#706476',
              }}
              key={idx}
            >
              {column.column}
            </Text>
          );
        })}
      </View>
      <View style={[styles.identitasTitleColor]}>
        {form?.rows?.map((row: any, idx: number) => {
          return (
            <View key={idx} style={[styles.defaultRow, styles.borderRowBottom]}>
              {ROW_KEYS.map((key) => (
                <Text
                  style={{
                    width: `${100 / form.columns.length}%`,
                    fontSize: 6,
                    color: '#706476',
                  }}
                >
                  {row[key]}
                </Text>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderHeaderImage = (
    <View
      style={{ display: 'flex', justifyContent: 'space-between', height: 500 }}
    >
      {/* <Image src={Logo} /> */}
      <Text>heheheheheheloo</Text>
    </View>
  );

  return (
    <div className='border h-screen'>
      <PDFViewer height='100%' width='100%'>
        <Document>
          <Page size='A4' style={styles.body}>
            <Text>heheheheheheloo</Text>

            <View style={styles.view}>
              {renderHeaderImage}
              {/* {forms.map((form: any, idx: number) =>
                (() => {
                  if (form.type === 'header' || form.type === 'sub-header') {
                    return renderHeaderTitle(form, idx);
                  } else if (form.type === 'identity-legend') {
                    return renderTableLegend(form, idx);
                  } else if (form.type === 'table') {
                    return renderDynamicTable(form, idx);
                  } else if (form.type === 'fixed-table') {
                    return renderFixTable(form, idx);
                  }
                })()
              )} */}
            </View>
            {/* <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            /> */}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 20,
  },
  view: {
    flexGrow: 1,
  },
  headerContainer: {
    borderBottom: '1px',
    borderBottomColor: 'red',
  },
  headerText: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 5,
  },
  subHeaderContainer: {
    marginVertical: 5,
  },
  subHeaderText: {
    marginHorizontal: 5,
    fontSize: 8,
    fontStyle: 'italic',
    fontFamily: 'Helvetica-Oblique',
  },
  tableWidth: {
    width: '100%',
  },
  identitas: {
    borderTop: '1px',
    borderTopColor: 'red',
  },
  defaultRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 4,
    paddingLeft: 8,
    gap: 4,
  },
  borderRowBottom: {
    borderBottom: '1px',
    borderBottomColor: '#d9d9d9',
  },
  defaultPaddingCell: {
    padding: '5px 8px',
  },
  identitasTitleColor: {
    backgroundColor: '#f2f2f2',
  },
  mainIdentitasTitle: {
    fontSize: 6,
    color: 'red',
    width: '25%',
  },
  mainIndentitasValue: {
    fontSize: 8,
    color: '#706476',
    width: '25%',
  },
  detailsTitleColor: {
    backgroundColor: '#d9d9d9',
  },
  marginForFixTable: {
    marginTop: 12,
  },
  fixTableValue: {
    fontSize: 8,
    color: '#706476',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export default FormToPdf;
