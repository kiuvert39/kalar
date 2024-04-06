import React, { useEffect } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../hooks/useAuthContex";
import axios from "axios";


function Home() {
const {user} = useAuthContext() 

useEffect(() => {
  if (user) {
    try{
      const responds = axios.get('http://localhost:5005/api/auth/dash',{
        withCredentials: true
      })
      console.log(responds)}
      catch(error){
        console.error('Error registering user:', error);
      }
  }

},[user]) 
  return (
    <div>
      <button>Notify</button>
      <ToastContainer />
    </div>
  )
}

export default Home