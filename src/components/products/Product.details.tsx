import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DotLoader} from "react-spinners";
import axios from 'axios';



interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Images: string[];
  rating: number;
  productId:string;
}

function Productdetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);


  useEffect(() => {
    const fetchProduct = async () => {
           try {
        const response = await axios.get(
          `https://kalar-sever.onrender.com/api/product/${id}`
        );
        const Productdetails  = response.data
        setMainImage(response.data.Images[0]); 
        console.log(Productdetails);        
        setProduct(Productdetails)
        console.log("data", response);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      }finally {
        setLoading(false);
      }
    };

    

    fetchProduct();
  }, [id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <DotLoader color="rgba(54, 215, 183, 1)" />
      </div>
    );
  }
  
  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">{product.Name}</h1>
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* Main Image */}
      <div className="w-full md:w-2/3 mb-4 md:mb-0 h-96">
        {mainImage ? (
          <img src={mainImage} alt={product.Name} className="w-full h-full object-cover rounded" />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded"></div>
        )}
      </div>
      {/* Thumbnail Images */}
      <div className="w-full md:w-1/3 flex flex-wrap gap-2 justify-center md:justify-start">
        {product.Images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={product.Name}
            onClick={() => setMainImage(image)}
            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
          />
        ))}
      </div>
    </div>
    <p className="mt-4">{product.Description}</p>
    <p className="mt-2 text-lg font-semibold">${product.Price}</p>
    <p className="mt-1">Rating: {product.rating}</p>
  </div>
  )
}

export default Productdetails