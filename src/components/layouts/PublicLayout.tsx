import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '#courses' },
  { label: 'About', path: '#about' },
  { label: 'Testimonials', path: '#testimonials' },
  { label: 'Gallery', path: '#gallery' },
  { label: 'Contact', path: '#contact' },
  { label: 'Admission', path: '/admission' },
  { label: 'Login', path: '/login' },
];

export default function PublicLayout() {
  return (
    <>
      <AppBar position="sticky" color="default" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              ExamCracker Tezu
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  color="textPrimary"
                  underline="none"
                  sx={{ fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
