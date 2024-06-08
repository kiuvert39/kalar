import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import axios from "axios";
import { Button, Typography } from "@material-tailwind/react";
import { Delivery } from "../images/delivery";
import { ReturnDelivery } from "../images/returnDelivery";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Images: string[];
  rating: number;
  productId: string;
}

function Productdetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<
    "increment" | "decrement" | null
  >(null);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setActiveButton("increment");
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    setActiveButton("decrement");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://kalar-sever.onrender.com/api/product/${id}`
        );
        const Productdetails = response.data;
        setMainImage(response.data.Images[0]);
        console.log(Productdetails);
        setProduct(Productdetails);
        console.log("data", response);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      } finally {
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
    <div className="p-4 sm:mt-20 md:m-20 md:flex">
      <div className="flex md:flex-row flex-col md:space-x-5">
        {/* Main Image */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 h-96 md:order-2">
          {mainImage ? (
            <img
              src={mainImage}
              alt={product.Name}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded"></div>
          )}
        </div>
        {/* Thumbnail Images */}
        <div className="w-full md:w-1/4 flex flex-wrap gap-2 justify-center md:justify-start md:order-1">
          {product.Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.Name}
              onClick={() => setMainImage(image)}
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-red-500"
            />
          ))}
        </div>
      </div>
      <div className="md:w-6/12	md:justify-start			">
        <div className="mt-2 mb-4 flex flex-col items-center sm:items-start justify-center mr-3 w-auto sm:max-w-92 sm:text-start sm:pl-5">
          <div className="iterm-start">
            {" "}
            <h3 className="text-3xl  italic mb-4">{product.Name}</h3>
          </div>

          <Typography
            variant="paragraph"
            className="text-xs font-normal   border-b-4 pb-8  border-b-black font-poppins leading-5 text-left w-auto  "
            placeholder={undefined}
          >
            {product.Description}
            and ensure that all contents are flexibly aligned and responsive,
            you can modify your component as follows. We'll use Tailwind CSS for
            styling and make sure that the layout is responsive.
          </Typography>
          <span className="text-red-800 text-sm text-center sm:text-left "></span>

          <div className="flex gap-2 w-full  mb-3  mt-4 justify-between md:flex-col md:mt-5  md:mb-6">
            <div className="flex text-yellow-500 w-auto  ">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} filled={index < 3} />
              ))}
            </div>
            <p className="-mt-1 text-lg font-semibold ">${product.Price}</p>
          </div>
          <div className="w-full  flex  justify-between">
            <div className="flex justify-center mb-4 sm:mb-0">
              <button
                onClick={decrementQuantity}
                className={`px-4 py-2 rounded-l hover:bg-red-500 ${
                  activeButton === "decrement"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                -
              </button>
              <div className="px-4 py-2 bg-gray-100 text-gray-800">
                {quantity}
              </div>
              <button
                onClick={incrementQuantity}
                className={`px-4 py-2 rounded-r hover:bg-red-500 ${
                  activeButton === "increment"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                +
              </button>
            </div>
            <Button
              onClick={() => alert("Buy button clicked")}
              placeholder={undefined}
              size="sm"
              className="px-6 md:w-36 bg-red-500  	text-white rounded hover:bg-red-500 mb-8  md:mb-4"
            >
              Buy
            </Button>
          </div>
          <div className="md:flex md:w-full  md:gap-6  md:justify-center">
            <InfoCard
              icon={<Delivery />}
              title="Free Delivery"
              description="Enter your postal code for delivery availability"
            />
            <InfoCard
              icon={<ReturnDelivery />}
              title="Return Delivery"
              description="Free 30 Days Delivery Returns. Details"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center p-4 border-b mb-4 cursor-pointer">
      <div className="flex items-center mr-4 relative lg:hover:opacity-100">
        <div className="flex-shrink-0">{icon}</div>
        <div
          className="ml-2 lg:absolute lg:top-full lg:left-0 bg-white shadow-md py-2 px-4 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
          style={{ minWidth: "200px" }}
        >
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Productdetails;
