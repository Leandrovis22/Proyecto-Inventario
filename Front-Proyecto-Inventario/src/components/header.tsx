import React, { useState } from 'react';
import { Search, ShoppingCart, User, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between z-50">
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
    </header>
  );
};

export default Header;