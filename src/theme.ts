import { createTheme } from '@mui/material/styles';

//tema personalizado
declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      primaryColor: string;
      secondaryColor: string;
    };
  }

  interface ThemeOptions {
    customPalette?: {
      primaryColor?: string;
      secondaryColor?: string;
    };
  }
}

// Crear el tema personalizado
export const theme = createTheme({
  palette: {
    primary: {
      main: '#006634', // Color primario
    },
    secondary: {
      main: '#00a246', // Color secundario
    },
  },
});
