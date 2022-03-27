import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';

const ThemeModeButton: FC<{ darkMode: boolean; setDarkMode: (v: boolean) => void }> = ({
  setDarkMode,
  darkMode
}) => (
  <Button
    onClick={() => setDarkMode(!darkMode)}
    sx={{
      textTransform: 'none'
    }}>
    {darkMode ? (
      <Stack direction='row' spacing={1}>
        <Typography>Light Mode</Typography>
        <LightModeIcon />
      </Stack>
    ) : (
      <Stack direction='row' spacing={1}>
        <Typography>Dark Mode</Typography>
        <DarkModeIcon />
      </Stack>
    )}
  </Button>
);

export default ThemeModeButton;
