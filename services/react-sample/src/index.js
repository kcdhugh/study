import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// sentry
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing';

import App from './App';

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
