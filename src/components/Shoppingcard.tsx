import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Product {
  name: string;
  description?: string;
  price: number;
  imageSrc: any;
  rating: number;
  onRatingClick: (rating: number) => void;
}

const ShoppingCard: React.FC<Product> = ({ name, description, price, imageSrc, rating, onRatingClick  }) => {
  const [hovered, setHovered] = React.useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div
    className="w-96 sm:w-56 bg-gray-300 shadow-lg rounded-lg overflow-hidden m-4 relative"
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
        <p className="text-lg text-gray-700 sm:text-sm" >${price}</p>
        <div className="flex">
                    {/* Render star icons based on the rating */}
                    {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <FaStar
                                key={index}
                                className={starValue <= (hoverRating || rating) ? 'star-icon gold' : ''}
                                onClick={() => onRatingClick(starValue)}
                                onMouseEnter={() => setHoverRating(starValue)}
                                onMouseLeave={() => setHoverRating(0)}
                                // color={starValue <= (hoverRating || rating) ? 'star-icon gold' : 'white'
                                color='white'                            />
                        );
                    })}
                </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
