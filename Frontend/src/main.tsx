
import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material';
import{BrowserRouter} from 'react-router-dom';

const theme =createTheme({
  typography: {
    fontFamily: "Roboto Slab,serif",allVariants:{ color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
     <ThemeProvider theme ={theme}>
      <App />
     </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
