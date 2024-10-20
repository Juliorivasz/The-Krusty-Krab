import './index.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";


// Create a theme instance.
const theme = createTheme({
  cssVariables: false,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#bf0000',
    },
  },
});


const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
