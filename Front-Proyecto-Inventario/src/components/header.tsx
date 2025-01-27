import React, { useState } from 'react';
import { Search, ShoppingCart, User, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  
  return (
  <div className="fixed top-0 left-0 w-full z-50">
      {/* Upper Header */}
      <div className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-800">Inventory</h1>
          
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 w-64"
              />
              <Search 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <Button>
              <User className="mr-2 h-4 w-4" /> Register
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link
            to="/"
            className={`px-4 py-3 font-medium text-lg ${
              location.pathname === '/' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Store
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-3 font-medium text-lg ${
              location.pathname === '/dashboard' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;