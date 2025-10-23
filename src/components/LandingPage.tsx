import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1675086653291-c5c3c507aafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBwbGFudHMlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2MTIyNTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-800/50 to-green-900/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl">
              <Sparkles className="w-16 h-16 text-green-200" />
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl tracking-tight">
            GreenGlow
          </h1>
          
          {/* Subheading */}
          <p className="text-green-100 text-xl md:text-2xl tracking-wide">
            The Houseplant Haven 🌿
          </p>
          
          {/* About Paragraph */}
          <div className="max-w-2xl mx-auto">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              Welcome to your ultimate destination for premium houseplants. We cultivate and curate 
              the finest selection of indoor greenery to transform your space into a thriving oasis. 
              From low-maintenance beauties to exotic tropical wonders, discover plants that bring 
              life, air purification, and natural elegance to your home.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={() => navigate('/products')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              Get Started
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="pt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
