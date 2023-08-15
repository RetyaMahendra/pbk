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
import SummaryLogo from '../../summary.png';

const FormToPdf = () => {
  const { state } = useLocation();
  const forms = state?.listForms ?? [];

  const renderHeaderImage = (
    <View style={{ marginBottom: 4 }}>
      <View style={styles.navbar}>
        <Image src={Logo} style={styles.navbarImage} />
        <Text style={{ fontSize: 14, fontFamily: 'Oswald' }}>
          PT. PEFINDO Biro Kredit
        </Text>
      </View>
      <Text style={[styles.navbarFontFamily, styles.navbarText]}>IdScore+</Text>
    </View>
  );

  const renderTable = (form: any, idx: number) => (
    <View
      style={[
        styles.tableWidth,
        { borderBottom: idx !== 2 && idx !== 8 ? '1px solid #CCCCCC' : 'none' },
      ]}
      key={idx}
    >
      <Text style={{ fontSize: 14, fontFamily: 'Oswald', color: 'red' }}>
        {form.title}
      </Text>
      <View style={[styles.defaultRow, styles.defaultPaddingCell]}>
        {form.columns?.map((column: any, idx: number) => {
          return (
            <Text
              style={{
                width: `${100 / form.columns.length}%`,
                fontSize: 12,
              }}
              key={idx}
            >
              {column.column}
            </Text>
          );
        })}
      </View>
      <View style={[styles.defaultRow, styles.defaultPaddingCell]}>
        {form.rows?.map((_: any, idx: number) => {
          return (
            <View
              style={{
                width: `${100 / form.rows.length}%`,
                fontSize: 12,
                color: '#706476',
              }}
              key={idx}
            >
              <View>
                {form.rows[idx].row.map((val: any, idx: number) => (
                  <Text key={idx}>{val.value}</Text>
                ))}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderForm = (form: any, idx: number) => {
    return (
      <View
        style={[
          styles.tableWidth,
          {
            borderBottom: idx !== 2 && idx !== 8 ? '1px solid #CCCCCC' : 'none',
            paddingTop: 8,
            paddingBottom: 24,
          },
        ]}
        key={idx}
      >
        <Text
          style={[
            styles.titleFont,
            {
              textAlign: idx !== 0 && idx !== 2 ? 'left' : 'center',
              marginBottom: 8,
            },
          ]}
        >
          {form.title}
        </Text>
        <View style={[styles.flexRow, { gap: 24, marginHorizontal: 16 }]}>
          <View style={{ width: '50%' }}>
            {form.leftColumn.map((form: any, idx: number) => {
              return (
                <View style={[styles.flexRow, { gap: 12 }]} key={idx}>
                  <Text style={[styles.formFont]}>{form.label}</Text>
                  <Text style={[styles.formFont]}>{form.value}</Text>
                </View>
              );
            })}
          </View>
          <View style={{ width: '50%' }}>
            {form.rightColumn.map((form: any, idx: number) => {
              return (
                <View style={[styles.flexRow, { gap: 12 }]} key={idx}>
                  <Text style={[styles.formFont]}>{form.label}</Text>
                  <Text style={[styles.formFont]}>{form.value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  const renderSummary = (form: any, idx: number) => {
    return (
      <View
        style={[
          styles.tableWidth,
          styles.flexRow,
          {
            borderBottom: idx !== 2 && idx !== 8 ? '1px solid #CCCCCC' : 'none',
            paddingTop: 8,
            paddingBottom: 24,
            gap: 32,
          },
        ]}
      >
        <View>
          <Text style={[styles.titleFont]}>{form.title}</Text>
          <Image src={SummaryLogo} style={styles.summaryLogo} />
        </View>
        <View>
          <Text style={[styles.titleFont]}>{form.details.label}</Text>
          <Text
            style={[
              {
                flex: 1,
                width: 350,
                textAlign: 'justify',
                fontSize: 13,
                marginTop: 6,
              },
            ]}
          >
            {form.details.points}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <div className='border h-screen'>
      <PDFViewer height='100%' width='100%'>
        <Document>
          <Page size='A4' style={styles.body}>
            <View style={styles.view}>
              {renderHeaderImage}
              {forms.map((form: any, idx: number) =>
                (() => {
                  if (form.type === 'table') {
                    return renderTable(form, idx);
                  } else if (form.type === 'forms') {
                    return renderForm(form, idx);
                  } else if (form.type === 'summary') {
                    return renderSummary(form, idx);
                  }
                })()
              )}
            </View>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
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
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: '3px',
    borderBottomColor: 'red',
    paddingBottom: 10,
  },
  navbarImage: {
    objectFit: 'scale-down',
    height: 50,
    width: 125,
  },
  navbarFontFamily: {
    fontFamily: 'Oswald',
  },
  navbarText: {
    textAlign: 'center',
    marginTop: 4,
    color: 'red',
  },
  tableWidth: {
    width: '100%',
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
    fontFamily: 'Oswald',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  formFont: {
    fontSize: '15px',
    lineHeight: 1.3,
    flex: 1,
  },
  titleFont: {
    fontSize: 18,
    fontFamily: 'Oswald',
  },
  summaryLogo: {
    width: 150,
    objectFit: 'scale-down',
    marginTop: 8,
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
