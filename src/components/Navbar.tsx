import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../data/site';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
            {siteConfig.name}
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                location.pathname === item.href ? "text-black" : "text-gray-500"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location.pathname === item.href
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
