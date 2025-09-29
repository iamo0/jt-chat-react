import './index.css'

import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage.tsx'

const LazyBlogLayout = lazy(() => import("./pages/blog/blog-layout.tsx"))
const LazyBlogNewsIndex = lazy(() => import("./pages/blog/blog-news-index.tsx"))
const LazyBlogNewsItem = lazy(() => import("./pages/blog/blog-news-item.tsx"))
const LazyPage404 = lazy(() => import("./pages/page-404/page-404.tsx"))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<p>Идет загрузка...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/blog" element={<LazyBlogLayout />}>
            <Route index element={<LazyBlogNewsIndex />} />
            <Route path="/blog/:newsId" element={<LazyBlogNewsItem />} />
          </Route>
          <Route path="*" element={<LazyPage404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
);
