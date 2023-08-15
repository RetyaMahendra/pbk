import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { setUser } from '../redux/user/userApi';
import { useAppDispatch } from '../redux/store';

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      dispatch(setUser(user));
      return;
    }

    loginWithRedirect({
      appState: { targetUrl: '/api-monitoring', returnTo: '/api-monitoring' },
    });
  }, [dispatch, isAuthenticated, isLoading, loginWithRedirect, user]);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Typography>
        If you don't redirect the automatic click on the login button.
      </Typography>
      <Button
        variant='contained'
        onClick={() =>
          loginWithRedirect({
            appState: {
              returnTo: '/api-monitoring',
            },
          })
        }
      >
        Login
      </Button>
    </div>
  );
};

export default SignIn;
