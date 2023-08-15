import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
  REQUEST_RATE,
  NGINX,
  LATENCIES,
  LATENCIES_2ND,
  LATENCIES_3RD,
} from '../../utils/constant';

const ApiMonitoring = () => {
  const renderIframe = ({ src, title }: { src: string; title: string }) => (
    <iframe src={src} width='100%' height={200} title={title} key={title} />
  );

  return (
    <div className='w-full px-4 overflow-auto'>
      <Typography fontWeight={700} textAlign='center' padding={2}>
        Request Rate
      </Typography>
      <div className='w-full flex justify-center items-center gap-5 mb-10'>
        {REQUEST_RATE.map(({ src, title }) => {
          return renderIframe({ src, title });
        })}
      </div>
      <Divider />
      <Typography fontWeight={700} textAlign='center' padding={2}>
        Nginx
      </Typography>
      <div className='w-full flex justify-center items-center gap-5 mb-10'>
        {renderIframe({
          src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681048574628&to=1681052174628&kiosk=tv&theme=light&panelId=17&embedded=true`,
          title: 'Nginx connection state',
        })}
      </div>
      <div className='w-full flex justify-center items-center gap-5 mb-10'>
        {NGINX.map(({ src, title }) => {
          return renderIframe({ src, title });
        })}
      </div>
      <Divider />
      <Typography fontWeight={700} textAlign='center' padding={2}>
        Latencies
      </Typography>
      <div className='flex flex-col gap-4'>
        <div className='w-full flex justify-center items-center gap-4'>
          {LATENCIES.map(({ src, title }) => {
            return renderIframe({ src, title });
          })}
        </div>
        <div className='w-full flex justify-center items-center gap-4'>
          {LATENCIES_2ND.map(({ src, title }) => {
            return renderIframe({ src, title });
          })}
        </div>
        <div className='w-full flex justify-center items-center gap-4'>
          {LATENCIES_3RD.map(({ src, title }) => {
            return renderIframe({ src, title });
          })}
        </div>
      </div>
    </div>
  );
};

export default ApiMonitoring;
