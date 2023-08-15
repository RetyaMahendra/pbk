import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReportPage from './pages/report/report';
import BulkReportPage from './pages/bulk-report/bulkReport';
import SignIn from './sign-in/signIn';
import { setUser } from './redux/user/userApi';
import { useAppDispatch } from './redux/store';
import Dashboard from './pages/dashboard/dashboard';
import ApiMonitoring from './pages/dashboard/ApiMonitoring';
import Layout from './components/layout/index';
import FormToPdf from './pages/pdf';
import Builder from './pages/pdf/builder';
import ProductManagement from './pages/product-management';

export default function App() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated || isLoading) {
      dispatch(setUser(user));
      return;
    }

    loginWithRedirect({
      appState: { targetUrl: '/', returnTo: '/' },
    });
  }, [dispatch, isAuthenticated, isLoading, loginWithRedirect, user]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className='h-screen w-full flex items-center justify-center'>
        <CircularProgress />
      </div>
    );
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<ApiMonitoring />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/analytics' element={<Dashboard />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/report' element={<ReportPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/bulkreport' element={<BulkReportPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/builder' element={<Builder />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/form-pdf' element={<FormToPdf />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/product-management' element={<ProductManagement />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='*' element={<div>Not Found</div>} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
