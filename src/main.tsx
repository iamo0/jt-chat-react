import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage.tsx'
import BlogLayout from './pages/blog/blog-layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/blog" element={<BlogLayout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
