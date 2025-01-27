import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

const ProductHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Sample featured images for carousel
  const featuredImages = [
    "/src/assets/images/featured/featured1.jpg",
    "/src/assets/images/featured/featured2.jpg",
  ];

  // Sample products data
  const products: Product[] = [
    { id: 1, name: "Laptop Pro", price: 999.99, image: "/src/assets/images/products/product1.jpg", category: "Technology" },
    { id: 2, name: "Wireless Mouse", price: 29.99, image: "/src/assets/images/products/product2.jpg", category: "Technology" },
    { id: 3, name: "Coffee Maker", price: 79.99, image: "/src/assets/images/products/product1.jpg", category: "Appliances" },
    { id: 4, name: "Notebook Set", price: 12.99, image: "/src/assets/images/products/product2.jpg", category: "School" },
  ];

  // Sample categories
  const categories: Category[] = [
    { id: 1, name: "Technology", icon: "💻" },
    { id: 2, name: "Appliances", icon: "🏠" },
    { id: 3, name: "School", icon: "📚" },
    { id: 4, name: "Consumables", icon: "🛒" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  return (
    <div className="container mx-auto px-4">
      {/* Featured Products Carousel */}
      <div className="relative h-[25vh] mb-8 overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Featured ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length)}
        >
          <ChevronLeft />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredImages.length)}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{quantities[product.id] || 0}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className="h-20 text-lg flex flex-col items-center justify-center"
            onClick={() => {/* Handle category navigation */}}
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductHome;