import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { Button } from './ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function CartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector(state => state.cart);
  
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('Item removed from cart');
  };
  
  const handleIncrement = (id: string, currentQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };
  
  const handleDecrement = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };
  
  const handleCheckout = () => {
    toast.info('Coming Soon! 🌱', {
      description: 'Checkout functionality will be available soon.',
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-200 shadow-lg">
              <ShoppingBag className="w-20 h-20 text-green-400" />
            </div>
          </div>
          <h2 className="text-gray-700">Your Cart is Empty</h2>
          <p className="text-gray-600 max-w-md">
            Looks like you haven't added any plants to your cart yet. 
            Start shopping to build your indoor garden!
          </p>
          <Button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-800 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-green-50 rounded-lg p-1">
                        <button
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-green-700" />
                        </button>
                        <span className="w-8 text-center text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(item.id, item.quantity)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-green-700" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-green-600">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg sticky top-24">
              <h2 className="text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-green-100 pt-3">
                  <div className="flex justify-between text-gray-800">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Checkout
                </Button>
                <Button
                  onClick={() => navigate('/products')}
                  variant="outline"
                  className="w-full border-green-300 text-green-700 hover:bg-green-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-sm text-green-800">
                  🌱 Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
