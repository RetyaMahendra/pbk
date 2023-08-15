import React from 'react';
import Typography from '@mui/material/Typography';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <Typography fontWeight={700}>Dashboard Analytics</Typography>
      </div>
      <div className="w-full flex justify-center items-center gap-5 mt-10">
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2MTI3MjQ5LCJJZGVudGl0eSI6MzEsIlRva2VuVHlwZSI6MH0.I3Q2Eos9I3FtTDDlBPi6zpfLfOxohFU0RzgK438nJ94"
          title="chart suku bunga"
          width={350}
          height={380}
          scrolling="no"
        />
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2MTI2OTY4LCJJZGVudGl0eSI6MjksIlRva2VuVHlwZSI6MH0.ysn2TqCElg8r80oH3SdyTYfuPFE9L9KMuT54_7olEak"
          title="chart gender"
          width={350}
          height={380}
          scrolling="no"
        />
      </div>
      <div className="w-full flex justify-center items-center gap-5 mt-8">
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2Mjc5MDIyLCJJZGVudGl0eSI6NDIsIlRva2VuVHlwZSI6MH0.6DSvE-AxS7-HlWfEdBqwT3kaW18VO7B8DEaBRMiSLtE"
          title="chart trend NPL"
          width="100%"
          height={750}
          scrolling="no"
        />
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2Mjc4ODQwLCJJZGVudGl0eSI6MzksIlRva2VuVHlwZSI6MH0.-zz4RBNtNgXo3AfIB4TsNSf3dVpIbpTgQoLKqIE5r4w"
          title="chart total debitur"
          width="100%"
          height={750}
          scrolling="no"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 mt-10">
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2MTI3NjM4LCJJZGVudGl0eSI6MzIsIlRva2VuVHlwZSI6MH0.4bWBYGd3T54jDZFDMjjpGGqhvKDK2yHMbujcRr2H4Yc"
          title="chart total kredit"
          width="100%"
          height={700}
          scrolling="no"
        />
        <iframe
          src="http://34.101.168.31/#/pdsshare/sharevisualization?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVkIjoxOTk2Mjc4NTcyLCJJZGVudGl0eSI6MzYsIlRva2VuVHlwZSI6MH0.CRpLOj4rrV3nnYbK1D71yyUSEhmYj-V0yrnaLd1Tt9Y"
          title="chart range usia individu"
          width="100%"
          height={700}
          scrolling="no"
        />
      </div>
    </div>

  )
}

export default Dashboard;
