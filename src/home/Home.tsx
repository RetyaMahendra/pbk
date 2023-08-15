import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
// import { useSelector } from 'react-redux';
// import DocumentToPdf from '../components/DocumentToPdf';
// import { RootState, useAppDispatch } from '../redux/store';
// import { getIndividu } from '../redux/individu/individuApi';
// import { getContract } from '../redux/contract/contractApi';

interface HomeProps {

}

// interface MyData {
//   title?: string;
//   description?: string;
// }

const HomePage: React.FC<HomeProps> = (props: HomeProps) => {
  // const [data, setData] = useState<MyData[]>([]);
  // const dispatch = useAppDispatch();
  // const individuList = useSelector((state: RootState) => state.individu.list);
  // const individuData = useSelector((state: RootState) => state.individu.list.values);
  // const contractList = useSelector((state: RootState) => state.contract.list);
  // const creditSummary = useSelector((state: RootState) => state.contract.creditSummary);
  // const contractData = useSelector((state: RootState) => state.contract.list.values);

  const getDataPdf = () => {
    // dispatch(getIndividu(nik));
    // dispatch(getContract(nik));
    // setTimeout(() => {
    //   document?.getElementById('click')?.click();
    // }, 3000);
  }

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
          onClick={getDataPdf}
        >
          get data PDF
        </Button>
      </div>
      {/* {
        individuList.status === 'success' && contractList.status === 'success' ?
          <>
            <PDFDownloadLink
              document={
                <DocumentToPdf
                  individuData={individuData ? individuData : undefined}
                  contractData={contractData ? contractData : undefined}
                  creditSummary={creditSummary ? creditSummary : undefined}
                />
              }
              fileName="report"
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
              <DocumentToPdf
                individuData={individuData ? individuData : undefined}
                contractData={contractData ? contractData : undefined}
                creditSummary={creditSummary ? creditSummary : undefined}
              />
            </PDFViewer>
          </>
          : null
      } */}
    </div>
  );
};

export default HomePage;
