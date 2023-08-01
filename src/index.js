import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import '@coreui/coreui/dist/css/coreui.min.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
  </React.StrictMode>
);

