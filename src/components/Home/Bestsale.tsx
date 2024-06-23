import React  from "react";
import Tag from "../../utilities/Tag";
import { Button, Typography } from "@material-tailwind/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCarousel from "./Cardprod";
import { PropagateLoader } from "react-spinners";


export async function   handleClickProduct(productId: string){
  console.log("Product ID clicked:", productId);
  if (!productId) {
    console.error("Product ID is undefined");
    return;
  }
  try {
    const response = await axios.get(
      `https://kalar-sever.onrender.com/api/product/${productId}`
    );
    console.log("Product details:", response.data);
    
  } catch (err) {
    console.error("Failed to fetch product details  id:", err);

  }
};


interface Product {
  name: string;
  description?: string;
  price: number;
  imageSrc: string;
  id:any;
  rating?: number;
  onRatingClick?: (rating: number) => void;
}


function Bestsale() {
  // const [slidesPerView, setSlidesPerView] = useState(3);
  const [buttonSize, setButtonSize] = useState<"sm" | "md" | "lg">("sm");
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [products] = useState<Product[]>([]);
  const [loading] = useState<boolean>(true);

  // let [color, setColor] = useState("#ffffff");


  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      // setSlidesPerView(5);
      setButtonSize("md");
    } else {
      // setSlidesPerView(3);
      setButtonSize("sm");
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const getProducts = async () => {
  //   try {
  //     var response = await axios.get(
  //       "http://localhost:5005/api/product/get-all_products"
  //     );
  //     console.log("data", response);

  //     const updateData = response.data.message.map((product: any) => ({
  //       id: product.id,
  //       name: product.Name,
  //       description: product.Description,
  //       price: product.Price,
  //       imageSrc: product.Images[0], // Assuming product.Images is an array
  //       rating: product.Rating,
  //     }));
  //     const  productid=[] 

  //     for (let i=0; i<=productid.length; i++){
  //      const  ids = response.data.message[i].productId
  //      productid.push(ids)
  //      console.log("pushing ids",productid);
  //     } 
    
      
  //     setProducts(updateData);
  //     console.log("testin product", setProducts(updateData));
  //   } catch (err) {
  //     setError("Failed to fetch products");
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  // useEffect(() => {
  //   getProducts();
  // }, []);



   const handleProductClick = (productId: string) => {
    console.log("Clicked product ID in parent:", productId);
    handleClickProduct(productId);
  };

  console.log("Products:", products);  // Debug log
  console.log("handleProductClick:", handleProductClick); 

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
    <>
      <div>
        <section className="md:ml-8 md:mr-28 ml-3 ">
          <Tag tagName="This Month" />
          <div className="flex gap-4 justify-between  mt-2  md:mt-8 mr-6">
            <Typography
              placeholder={undefined}
              variant="small"
              className="md:text-2xl"
            >
              Best Selling Products
            </Typography>
            <div className=" flex justify-center  ">
              <a href="/home1">
                <Button
                  placeholder={undefined}
                  className=""
                  color="red"
                  size={buttonSize}
                >
                  View All
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="md:mt-24">
      
          <div className="container slider-container mx-auto py-8">
          
            <ProductCarousel />
          </div>

        </section>
      </div>
    </>
  );
}




export default Bestsale;



