import { useState } from 'react';
import { Button } from './ui/button';
import { Check, ShoppingCart } from 'lucide-react';
import { Product } from '../store/cartSlice';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-100 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs bg-white/90 backdrop-blur-sm text-green-700 rounded-full border border-green-200 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-gray-800 mb-1">{product.name}</h3>
          <p className="text-green-600">${product.price.toFixed(2)}</p>
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full transition-all duration-300 ${
            isAdded
              ? 'bg-green-600 hover:bg-green-600'
              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
