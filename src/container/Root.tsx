import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import App from './App';

const Root = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode') ?? 'false'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
};

export default Root;
