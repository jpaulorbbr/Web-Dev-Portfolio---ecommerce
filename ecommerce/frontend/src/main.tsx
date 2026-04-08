import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('react-root');

if (!container) {
  console.error('❌ React root element (#react-root) not found in the HTML!');
} else {
  const root = ReactDOM.createRoot(container);

  // Extract data from Django template
  const props = {
    username: container.dataset.user,           // changed from userId
    isAuthenticated: container.dataset.isAuthenticated === 'true',
    pageTitle: container.dataset.pageTitle || "Django + React Admin",
  };

  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
}