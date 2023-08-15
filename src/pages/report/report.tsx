import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from 'jwt-decode';
import Button from '@mui/material/Button';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useSelector } from 'react-redux';
import { TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import DocumentToPdf from '../../components/DocumentToPdf';
import { RootState, useAppDispatch } from '../../redux/store';
import { getReport } from '../../redux/report/reportApi';
import DocumentToPdf2 from '../../components/DocumentToPdf2';
import { setAccessToken } from '../../redux/user/userSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ReportProps {

}
export interface State extends SnackbarOrigin {
  open: boolean;
}

const ReportPage: React.FC<ReportProps> = (props: ReportProps) => {
  const dispatch = useAppDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const reportList = useSelector((state: RootState) => state.report.list);
  const report = useSelector((state: RootState) => state.report.list.values);
  const responseTime = useSelector((state: RootState) => state.report.list.time);
  const [typeReport, setTypeReport] = useState<string>('A');
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const checkPermission = async () => {
    try {
      const permission = await getAccessTokenSilently().then((res) => {
        dispatch(setAccessToken(res));
        return res;
      });
      return permission
    } catch (error) {
      return ''
    }
  }
  const getDataPdf = (typeReport: string) => {
    checkPermission().then((res) => {
      const decodedRes: any = jwt_decode(res);
      if (decodedRes?.permissions && decodedRes?.permissions?.includes('read:reportA') && typeReport === 'A') {
        setTypeReport(typeReport);
        return dispatch(getReport(nik));
      }
      if (decodedRes?.permissions && decodedRes?.permissions?.includes('read:reportB') && typeReport === 'B') {
        setTypeReport(typeReport);
        return dispatch(getReport(nik));
      }
      handlePermissionDenied({
        vertical: 'top',
        horizontal: 'center',
      });
      return
    });
  };

  const handlePermissionDenied = (newState: SnackbarOrigin) => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [nik, setNik] = useState<string>('0000002136587859746504429');

  return (
    <div>
      <div className='flex mb-10 w-full items-center justify-center gap-5'>
        <TextField
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          placeholder="type nik"
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={() => getDataPdf('A')}
          disabled={reportList?.isLoading}
          startIcon={<CloudDownloadIcon />}
        >
          {reportList?.isLoading ? 'loading' : 'report A'}
        </Button>
        <Button
          variant="contained"
          onClick={() => getDataPdf('B')}
          disabled={reportList?.isLoading}
          startIcon={<CloudDownloadIcon />}
        >
          {reportList?.isLoading ? 'loading' : 'report B'}
        </Button>
      </div>
      {/* <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide"
      >
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          permission denied
        </Alert>
      </Dialog> */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={5000}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Permission denied
        </Alert>
      </Snackbar>
      {
        reportList.status === 'success' ?
          <>
            <Typography>Response Time: {responseTime}ms</Typography>
            <PDFDownloadLink
              document={
                typeReport === 'A' ? (<DocumentToPdf report={report ? report : undefined} />) : (<DocumentToPdf2 report={report ? report : undefined} />)
              }
              fileName={`report ${nik}`}
            >
              {({ blob, url, loading, error }) =>
                loading ? <Button id="click" variant="contained">
                  Loading document...
                </Button> : <Button id="click" variant="contained">
                  Download
                </Button>
              }

            </PDFDownloadLink>
            <PDFViewer className="w-full md:min-h-[750px]">
              {
                typeReport === 'A' ? (<DocumentToPdf report={report ? report : undefined} />) : (<DocumentToPdf2 report={report ? report : undefined} />)
              }
            </PDFViewer>
          </>
          : null
      }
    </div>
  );
};

export default ReportPage;
