const REQUEST_RATE = [
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&kiosk=tv&from=1681031395337&to=1681032295337&theme=light&panelId=1&embedded=true`,
    title: 'Total Request Persecond',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681047402078&to=1681051002078&kiosk=tv&theme=light&panelId=16&embedded=true`,
    title: 'RPS Per Route/service (All)',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681047500412&to=1681051100412&kiosk=tv&theme=light&panelId=39&embedded=true`,
    title: 'RPS per route/service by status code',
  },
];

const NGINX = [
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681048650613&to=1681052250613&kiosk=tv&theme=light&panelId=18&embedded=true`,
    title: 'Nginx Total Connection',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681048741316&to=1681052341316&kiosk=tv&theme=light&panelId=19&embedded=true`,
    title: 'Nginx Handle Connection',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681048799441&to=1681052399441&kiosk=tv&theme=light&panelId=20&embedded=true`,
    title: 'Nginx Accepted Connection',
  },
];

const LATENCIES = [
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681077731098&to=1681081331098&kiosk=tv&theme=light&panelId=10&embedded=true`,
    title: 'Kong Proxy Latency across all services',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681077823088&to=1681081423088&kiosk=tv&theme=light&panelId=11&embedded=true`,
    title: 'Kong Proxy Latency per Service',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681077856671&to=1681081456671&kiosk=tv&theme=light&panelId=42&embedded=true`,
    title: 'Kong Proxy Latency per Route',
  },
];

const LATENCIES_2ND = [
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078002141&to=1681081602141&kiosk=tv&theme=light&panelId=12&embedded=true`,
    title: 'Request Time across all services',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078022772&to=1681081622773&kiosk=tv&theme=light&panelId=13&embedded=true`,
    title: 'Request Time per service',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078038844&to=1681081638844&kiosk=tv&theme=light&panelId=41&embedded=true`,
    title: 'Request Time per Route',
  },
];

const LATENCIES_3RD = [
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078127548&to=1681081727548&kiosk=tv&theme=light&panelId=14&embedded=true`,
    title: 'Upstream time across all services',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078145886&to=1681081745886&kiosk=tv&theme=light&panelId=15&embedded=true`,
    title: 'Upstream Time across per service',
  },
  {
    src: `${process.env.REACT_APP_BASE_GRAFANA}/d-solo/mY9p7dQmz12/kong-api-gateway-monitoring?orgId=1&from=1681078161795&to=1681081761795&kiosk=tv&theme=light&panelId=40&embedded=true`,
    title: 'Upstream Time across per Route',
  },
];

export { REQUEST_RATE, NGINX, LATENCIES, LATENCIES_2ND, LATENCIES_3RD };
