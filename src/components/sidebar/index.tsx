import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import SourceIcon from '@mui/icons-material/Source';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Logo from '../../images.png';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface NavigationMenu {
  title: string;
  path: string;
}

const Sidebar: React.FC<Props> = (props) => {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();

  const navigationMenu: NavigationMenu[] = [
    {
      title: 'api monitoring',
      path: '/',
    },
    {
      title: 'analytics',
      path: '/analytics',
    },
    {
      title: 'report',
      path: '/report',
    },
    {
      title: 'bulk-report',
      path: '/bulkreport',
    },
    {
      title: 'form-builder',
      path: '/builder',
    },
    {
      title: 'product',
      path: '/product-management',
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Link to='/' className='w-full flex justify-center'>
          <img src={Logo} alt='logo' width='120' />
        </Link>
      </Toolbar>
      <List disablePadding={true}>
        {navigationMenu.map((menu, index) => (
          <Link key={menu.path} to={menu.path}>
            <ListItem
              disablePadding
              className={`${
                location.pathname === menu.path ? 'bg-slate-100' : ''
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SourceIcon /> : <FolderCopyIcon />}
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: drawerWidth },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none', paddingTop: 0 },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
