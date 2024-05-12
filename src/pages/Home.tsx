import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Toast from "../utilities/Authtoast";
import Header from "../components/Home/header";
import Flashsale from "../components/Home/Flashsale";
import CountdownTimer from "../utilities/Countdown";
import { Button, Typography } from "@material-tailwind/react";


 
axios.defaults.withCredentials = true;

function Home() {
  const [message, setMessage] = useState("");
  const flashSaleEndTime = new Date("2024-05-14T00:00:00");

  const { isLoggedIn } = useAuth();
  const [isUnauthorized, setIsUnauthorized] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responds = await axios.get(
          "http://localhost:5005/api/auth/dash",
          {
            withCredentials: true,
          }
        );
        console.log("hello", responds);
        setMessage(responds.data.message);

        setIsUnauthorized(!isLoggedIn);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };
    fetchData();
  }, [isLoggedIn]);
  return (
    <div>
      {isUnauthorized && <Toast message="User is not authenticated" />}
      <Header />
      <div>
        <div className=" md:ml-24 md:mt-10 ">
          <section className="mt-10 pl-6 gap-8 md:flex  md:mb-8  md:mt-12  md:justify-self-start ">
            <div className="flex  gap-2 md:mt-2">
              <div className="md:w-5 md:h-10 bg-red-500 w-2 h-4"></div>
              <Typography
                placeholder={undefined}
                variant="h6"
                className="text-red-500  md:mt-2"
              >
                Today's
              </Typography>
            </div>
            <div className=" md:flex md:gap-5 md:mt-3">
              <div className="md:text-4xl">Flash sale:</div>
              <CountdownTimer flashSaleEndTime={flashSaleEndTime} />
            </div>
            <div></div>
          </section>         
          {/* <Slider/> */}
          <div>
          <Flashsale />
          <div className=" flex justify-center mb-8">
            <a href="#">
              <Button placeholder={undefined} className="" color="red">
                View All Products
              </Button>
            </a>
          </div>
          </div>
          
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
