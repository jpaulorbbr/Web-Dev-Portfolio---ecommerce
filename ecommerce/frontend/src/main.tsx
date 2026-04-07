import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('react-root') as HTMLElement;

if (!rootElement) {
  console.error('React root element not found!')
} else {
  // Extract all data-* attributes
  const props = {
    user: rootElement.dataset.userId,
    isAuthenticated: rootElement.dataset.isAuthenticated === 'true',
    pageTitle: rootElement.dataset.pageTitle,
    // For complex JSON data
    items: rootElement.dataset.items 
      ? JSON.parse(rootElement.dataset.items) 
      : [],
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  )
}