import axios from "axios";
import { useAuthContext } from "./useAuthContex";
import { signout } from "../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
;


export const useLogout = async () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  async function logout() {
    try{ 
      const response = await axios.get("https://kalar-sever.onrender.com/api/auth/logout");
    dispatch(signout())
    navigate('/Auth/login')
  }catch(error){ 
    console.log(error)
  }}
   return { logout };
};
