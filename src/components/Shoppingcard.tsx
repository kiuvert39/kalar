import React from 'react';

interface Product {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}

const ShoppingCard: React.FC<Product> = ({ name, description, price, imageSrc }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
    className="w-40 sm:w-56 bg-white shadow-lg rounded-lg overflow-hidden m-4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative ">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={name} />
        {hovered && (
        <div className="absolute bottom-0 left-0 w-full p-2 bg-black transition duration-700 ease-in-out ">
          <button className="bg-black text-white w-full px-3 py-2 rounded hover:bg-black  transition-opacity duration-500 opacity-100 ease-in-out">
            Add to Cart
          </button>
        </div>
      )}
      </div>
      
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg text-gray-700">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ShoppingCard;
