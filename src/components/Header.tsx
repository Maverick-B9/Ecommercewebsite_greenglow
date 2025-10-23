import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useAppSelector } from '../store/hooks';

export function Header() {
  const location = useLocation();
  const totalItems = useAppSelector(state => state.cart.totalItems);
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-2 rounded-xl shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GreenGlow
            </span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors hover:text-green-600 ${
                location.pathname === '/' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`transition-colors hover:text-green-600 ${
                location.pathname === '/products' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-green-50 transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
