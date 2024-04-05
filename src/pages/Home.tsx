import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function Home() {

useEffect(() => {
  try{
  const responds = axios.get('http://localhost:5005/api/auth/dash',{
    withCredentials: true 
  })
  console.log(responds)}
  catch(error){
    console.error('Error registering user:', error);
  }

}) 
  return (
    <div>
      <button>Notify</button>
      <ToastContainer />
    </div>
  )
}

export default Home