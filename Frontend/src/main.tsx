
import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material';
import{BrowserRouter} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.tsx";
import axios from "axios";
import{Toaster} from 'react-hot-toast'
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;


const theme =createTheme({
  typography: {
    fontFamily: "Roboto Slab,serif",allVariants:{ color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
     <ThemeProvider theme ={theme}>
      <App />
     </ThemeProvider>
    
     <Toaster position  ="top-right"/>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
