import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signinSuccess } from "../store/user/userSlice";
import { useDispatch} from "react-redux";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [,setLoginValideEmail] = useState<string | null>(null);
  const [email,setEmail]= useState()
 
const login = async(email: string, password: string) =>{
    setError(null);
    const response = await axios.post("https://kalar-sever.onrender.com/api/auth/login", {
      email: email,
      password: password,
    });
    console.log("from login0",response);
    if (response) {
      dispatch(signinSuccess(response.data));
      setLoginValideEmail(response.data.message)
      setEmail(response.data.user.email)
      if(response.data.user.email){
        navigate("/Auth/verify/otp");
      }
     
    }
  }

  return { login, error,email};
};
