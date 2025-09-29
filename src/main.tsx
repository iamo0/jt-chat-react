import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage.tsx'

import './index.css'

const LazyBlogLayout = lazy(() => import("./pages/blog/blog-layout.tsx"))
const LazyBlogNewsIndex = lazy(() => import("./pages/blog/blog-news-index.tsx"))
const LazyBlogNewsItem = lazy(() => import("./pages/blog/blog-news-item.tsx"))

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
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
);
