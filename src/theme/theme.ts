import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a66c2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00b0ff',
    },
    background: {
      default: '#f4f7fb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
