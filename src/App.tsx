import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { ProductListingPage } from './components/ProductListingPage';
import { CartPage } from './components/CartPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={
                <>
                  <Header />
                  <ProductListingPage />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <CartPage />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </Provider>
  );
}
