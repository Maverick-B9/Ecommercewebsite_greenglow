import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Leaf } from 'lucide-react';

export function ProductListingPage() {
  // Group products by category
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-2xl shadow-lg">
              <Leaf className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-gray-800">Our Plant Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Handpicked houseplants to brighten your home and purify your air. 
            Each plant comes with care instructions and our quality guarantee.
          </p>
        </div>
        
        {/* Products by Category */}
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category}>
              {/* Category Header */}
              <div className="mb-6">
                <h2 className="text-gray-700 mb-2">{category}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
              </div>
              
              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter(product => product.category === category)
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-sm">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Eco-friendly packaging • Free care guide with every plant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
