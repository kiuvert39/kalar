import React, { useState, useEffect} from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import ProductCarousel from "./Cardprod";
import {  PropagateLoader } from "react-spinners";


//remember  to  connect not found error from  backend to  frontend

interface Product {
  name: string;
  description?: string;
  price: number;
  imageSrc: string;
  rating?: number;
  onRatingClick?: (rating: number) => void;
}


const Flashsale: React.FC = () => {
  const [, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // let [color, setColor] = useState("#ffffff");



  const getProducts = async () => {
    try {
      var response = await axios.get(
        "http://localhost:5005/api/product/get-all_products"
      );
  

      const updateData = response.data.message.map((product: any) => ({
        name: product.Name,
        description: product.Description,
        price: product.Price,
        imageSrc: product.Images[0],  // Assuming product.Images is an array
        rating: product.Rating,
      }));

      // console.log("images", updateData);
      // setProducts(response.data);

      setProducts(updateData);

    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div className="justify-center flex flex-col items-center"><PropagateLoader color="#36d7b7" /></div>;
  }

  if (error) {
  return <div className="justify-center flex flex-col items-center">{error}</div>;
  }
 
  
 
 

  return (
    <>
      <div className="container slider-container mx-auto">
         <ProductCarousel />
      </div>
    </>
  );
};

export default Flashsale;
