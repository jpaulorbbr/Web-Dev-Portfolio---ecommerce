import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import BaseLayout from './components/BaseLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Todas as páginas públicas vão usar o BaseLayout */}
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/store" element={<StorePage />} />
            <Route path="/products" element={<ProductsPage />} />*/}
          {/* Adicione todas as rotas que antes eram templates Django */}
          </Route>

          {/* Rotas do Admin (vamos tratar depois) */}
          {/*<Route path="/admin/*" element={<AdminLayout />} />*/}
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
