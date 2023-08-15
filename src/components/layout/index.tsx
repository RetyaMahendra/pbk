import { useState } from 'react';
import Sidebar from '../sidebar/index';
import Header from '../header/index';
import { Outlet } from 'react-router-dom';

const DRAWER_WIDTH: number = 240;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className='flex'>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className='grow'>
        <Header
          drawerWidth={DRAWER_WIDTH}
          handleDrawerToggle={handleDrawerToggle}
        />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
