import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Box, Drawer, List, ListItemButton, ListItemText, Toolbar, AppBar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const drawerWidth = 240;
const navItems = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Students', path: '/admin/students' },
  { label: 'Courses', path: '/admin/courses' },
  { label: 'Gallery', path: '/admin/gallery' },
  { label: 'Announcements', path: '/admin/announcements' },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setMobileOpen(!mobileOpen)} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', top: 64 },
          display: { xs: 'none', md: 'block' },
        }}
        open
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton component={RouterLink} to={item.path} key={item.label}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
