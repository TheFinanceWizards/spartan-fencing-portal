import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import SiteLayout from './components/layout/SiteLayout';
import ScrollToTop from './components/ScrollToTop';

// Route-level code splitting — each page loads only when navigated to
const Home     = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const About    = lazy(() => import('./pages/About'));
const Contact  = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  )
}

export default App
