import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
 window.onerror = (message, source, lineno, colno, error) => {
         console.error("Global error:", { message, source, lineno, colno, error });
         return true; // Предотвращаем всплывание ошибки
       };
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);