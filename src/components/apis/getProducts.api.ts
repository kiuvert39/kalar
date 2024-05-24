// api.ts
import axios from 'axios';

export  interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Images: string; 
}

interface ApiResponse {
  message: Product[];
}

export const getProducts = async (setSlideData: React.Dispatch<React.SetStateAction<Product[]>>) => {
  try {
    const response = await axios.get<ApiResponse>(
      "http://localhost:5005/api/product/get-all_products"
    );
    const updateData = response.data.message.map((product) => ({
      ...product,
      Images: product.Images[0],
    }));
    console.log("images", updateData);
    setSlideData(updateData);
  } catch (error) {
    console.error(error);
  }
};
