import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

window.addEventListener('load', () => {
  const appContainer = document.getElementById('app');
  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
