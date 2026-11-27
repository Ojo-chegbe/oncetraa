import { initBotId } from 'botid/client/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if (import.meta.env.VITE_VOLUNTEER_TRACKER_ENABLED === 'true') {
  initBotId({
    protect: [{ path: '/api/volunteer', method: 'POST', advancedOptions: { checkLevel: 'basic' } }],
  });
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const root = document.getElementById('root')!;
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
