import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';

ReactDOM.render(
  <BrowserRouter>
  <CssBaseline />
      <Navbar />
      <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
