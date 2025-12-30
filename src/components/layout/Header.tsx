import { Link } from 'react-router-dom';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-heading text-3xl md:text-4xl uppercase text-primary tracking-tight">
              MODERN
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-paragraph text-sm uppercase tracking-wider">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link 
              to="/store" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <MiniCart
              cartIcon={ShoppingCart}
              cartIconClassName="cursor-pointer text-primary hover:text-primary/80 transition-colors"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-6 font-paragraph text-xs uppercase tracking-wider mt-4 pt-4 border-t border-primary/10">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/categories" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <Link 
            to="/store" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
