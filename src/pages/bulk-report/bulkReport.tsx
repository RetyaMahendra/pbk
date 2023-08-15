import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import { TextareaAutosize } from '@mui/material';
// import { read, utils } from 'xlsx';
// import DocumentToPdf from '../../components/DocumentToPdf';
import { RootState, useAppDispatch } from '../../redux/store';
import { getMultiReport } from '../../redux/report/reportApi';
import {
  clearMultiReport,
  setEndTime,
  setStartTime,
} from '../../redux/report/reportSlice';
import { Report } from '../../redux/report/reportModel';
import DocumentToPdf from '../../components/DocumentToPdf';

interface ReportProps {}

interface Column {
  id: 'name' | 'nik' | 'report';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nama', minWidth: 170 },
  { id: 'nik', label: 'NIK', minWidth: 100 },
  {
    id: 'report',
    label: 'Report',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

// interface DataNik {
//   nik: string | undefined;
// }

const BulkReportPage: React.FC<ReportProps> = (props: ReportProps) => {
  const dispatch = useAppDispatch();
  const countMultipleReport = useSelector(
    (state: RootState) => state.report.multiReport.count
  );
  const startTime = useSelector(
    (state: RootState) => state.report.multiReport.startTime
  );
  const endTime = useSelector(
    (state: RootState) => state.report.multiReport.endTime
  );
  const reports = useSelector(
    (state: RootState) => state.report.multiReport.values
  );
  const totalReports = useSelector(
    (state: RootState) => state.report.multiReport.count
  );
  const [multipleNik, setMultipleNik] = useState<string>('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const words: string[] = multipleNik.split('\n');
  useEffect(() => {
    if (countMultipleReport >= words.length) {
      dispatch(setEndTime(moment(new Date()).format('yyyy-MM-DD HH:mm:ss')));
    }
  }, [countMultipleReport, dispatch, endTime, startTime, words.length]);

  const handleProcess = async () => {
    await dispatch(clearMultiReport(null));
    if (words.length !== 0) {
      dispatch(setStartTime(moment(new Date()).format('yyyy-MM-DD HH:mm:ss')));
      words.map((value) => dispatch(getMultiReport(value)));
    }
  };

  return (
    <div>
      <TextareaAutosize
        className='w-full bg-slate-200'
        onChange={(e) => setMultipleNik(e.target.value)}
        minRows={5}
        maxRows={10}
        value={multipleNik}
      />
      <div className='flex mb-10 w-full items-center justify-center gap-5'>
        <Button onClick={handleProcess} variant='contained'>
          Process
        </Button>
      </div>
      {reports.length !== 0 && (
        <>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reports
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Report, index) => {
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                        <TableCell>{row?.Individu?.['Nama Lengkap']}</TableCell>
                        <TableCell>
                          {row?.Individu?.['Nomor Identitas']}
                        </TableCell>
                        <TableCell align='center'>
                          <PDFDownloadLink
                            document={
                              <DocumentToPdf report={row ? row : undefined} />
                            }
                            fileName={`report ${row?.Individu?.['Nomor Identitas']}`}
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? (
                                <Button id='click' variant='contained'>
                                  <CircularProgress color='inherit' />
                                </Button>
                              ) : (
                                <Button id='click' variant='contained'>
                                  Download
                                </Button>
                              )
                            }
                          </PDFDownloadLink>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={totalReports}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default BulkReportPage;
