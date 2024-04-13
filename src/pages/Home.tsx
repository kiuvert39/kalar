import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Toast from "../utilities/Authtoast";

axios.defaults.withCredentials = true;
function Home() {
  const [message, setMessage] = useState("");

  const { isLoggedIn} = useAuth();
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

      <button>Notify, {message}</button>
      <ToastContainer />
    </div>
  );
}

export default Home;
