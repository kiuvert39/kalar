import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts, Product } from "../apis/getProducts.api";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';

export const ProductCard: React.FC<Product> = ({
  name,
  price,
  imageSrc,
  rating = 3,
}) => {
  return (
    <div className="h-full rounded-md transition-all duration-300 bg-white border border-gray-200 p-4 ">
      <div className="w-full max-h-72 cursor-pointer overflow-hidden relative group">
        <img
          alt={name}
          loading="lazy"
          width="300"
          height="300"
          decoding="async"
          className="w-full h-72 object-cover"
          src={imageSrc}
        />
        <button
          className="inline-flex items-center justify-center box-border bg-transparent outline-none border-none m-0 p-2 cursor-pointer user-select-none text-red-900 text-xl rounded-full absolute top-2.5 right-[-2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          type="button"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path>
          </svg>
        </button>
        <button
          className="inline-flex items-center justify-center box-border bg-transparent outline-none border-none m-0 p-2 cursor-pointer user-select-none text-gray-700 text-xl rounded-full absolute top-11 right-[-2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          type="button"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{name}</p>
        <h4 className="text-lg font-semibold">${price}</h4>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} filled={index < rating} />
            ))}
          </div>
        </div>
        <button className="mt-4 w-full border border-gray-400 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  const [loading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const navigate = useNavigate();

  const [slideData, setSlideData] = useState<Product[]>([]);
  useEffect(() => {
    getProducts(setSlideData);
  }, []);

  const displayedProducts = slideData.slice(0, 8);

  // async function handleClickProduct(productId: string): Promise<void> {
  //   if (!productId) {
  //     console.error("Product ID is undefined");
  //     return;
  //   }
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5005/api/product/${productId}`
  //     );

  //     console.log("data", response);
  //   } catch (err) {
  //     console.error("Failed to fetch product details:", err);
  //   }
  // }

  const handleClick = async (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!loading) {
    return (
      <div className="justify-center flex flex-col items-center">
        <PropagateLoader color="#36d7b7" />
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="justify-center flex flex-col items-center">{error}</div>
  //   );
  // }

  return (
    <div className="container slider-container mx-auto py-8">
      <Slider {...settings}>
        {displayedProducts.map((product, index) => (
          <li key={product.id} onClick={() => handleClick(product.productId)} className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div key={index} className="px-2">
              <ProductCard
                name={product.Name}
                price={product.Price}
                imageSrc={product.Images}
                Price={0}
              />
            </div>
          </li>
        ))}
      </Slider>
    </div>
  );
};

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);

export default ProductCarousel;
