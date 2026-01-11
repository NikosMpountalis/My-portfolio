import React from 'react';
import ReactDOM from 'react-dom/client';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import App from './App.jsx';
import './index.css';

const baseUrl = import.meta.env.BASE_URL ?? '/';
document.documentElement.style.setProperty(
  '--cta-banner-bg-image',
  `url(${baseUrl}assets/images/full-width-images/section-bg-image.jpg)`
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
