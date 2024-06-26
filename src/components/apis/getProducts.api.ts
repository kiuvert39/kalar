// api.ts
import axios from "axios";

export interface Product {
  [x: string]: any;
  name: string;
  Description?: string;
  Price: number;
  Images?: any;
}

interface ApiResponse {
  message: Product[];
}


export const getProducts = async (
  setSlideData: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  try {
    const response = await axios.get<ApiResponse>(
      "https://kalar-sever.onrender.com/api/product/get-all_products"
    );
    const updateData = response.data.message.map((product) => ({
      ...product,
      Images: product.Images[0],
    }));
    setSlideData(updateData);
  } catch (error) {
    console.error(error);
  }
};
