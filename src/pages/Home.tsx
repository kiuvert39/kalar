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
import Tag from "../utilities/Tag";
import Category from "../components/Home/category";

axios.defaults.withCredentials = true;

function Home() {
  const [message, setMessage] = useState("");
  const flashSaleEndTime = new Date("2024-05-20T00:00:00");

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
    <div  >
      {isUnauthorized && <Toast message="User is not authenticated" />}
      <Header />
      <div   className=" md:ml-24 md:mt-10 md:mr-24">
      <div>
        <div className=" md:mt-10 ">
          <section className="mt-10 pl-6 gap-8 md:flex  md:mb-8  md:mt-12  md:justify-self-start ">
            <Tag tagName="  Today's" />            
            <div className=" md:flex md:gap-5 md:mt-3">
              <div className="md:text-4xl">Flash sale:</div>
              <CountdownTimer flashSaleEndTime={flashSaleEndTime} />
            </div>
            <div></div>
          </section>
          {/* <Slider/> */}
          <div>
            <Flashsale />
            <div className=" flex justify-center mb-8 mt-8">
              <a href="#">
                <Button placeholder={undefined} className="" color="red">
                  View All Products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div  className="md:ml-5  ml-4 ">
        <Category/> 
      </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
