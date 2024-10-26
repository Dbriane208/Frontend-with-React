import React, { useState } from 'react';
import ShoeImage from '../assets/Shoe.png'

interface ColorOption {
  name: string;
  class: string;
}

interface ProductDisplayProps {
  initialColor?: string;
  initialSize?: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  initialColor = 'black',
  initialSize = '42'
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [selectedSize, setSelectedSize] = useState<string>(initialSize);

  const colors: ColorOption[] = [
    { name: 'black', class: 'bg-black' },
    { name: 'blue', class: 'bg-blue-500' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'pink', class: 'bg-pink-400' },
    { name: 'yellow', class: 'bg-yellow-400' }
  ];

  const sizes: string[] = ['40', '41', '42', '43', '44', '45'];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 flex gap-8 max-w-4xl w-full">
        {/* Left side - Image */}
        <div className="flex-1 relative">
          <img 
            src={ShoeImage} 
            alt="Black Sneaker"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[0, 1, 2, 3, 4].map((dot: number) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-black' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right side - Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold mb-1">Product Name</h1>
          <p className="text-gray-600 mb-6">More info</p>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-4">PRODUCT DESCRIPTION</h2>
            <div className="space-y-2">
              <div className="h-1 bg-gray-200 w-full rounded" />
              <div className="h-1 bg-gray-200 w-full rounded" />
              <div className="h-1 bg-gray-200 w-3/4 rounded" />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-3">COLOUR</h2>
            <div className="flex gap-3">
              {colors.map((color: ColorOption) => (
                <button
                  key={color.name}
                  className={`w-6 h-6 rounded-full ${color.class} ${
                    selectedColor === color.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-sm font-semibold mb-3">SIZE</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size: string) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <button className="bg-blue-500 text-white px-12 py-3 rounded-full font-semibold hover:bg-blue-600">
              BUY
            </button>
            <span className="text-xl font-bold">€45,95</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;