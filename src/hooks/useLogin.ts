import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signinSuccess } from "../store/user/userSlice";
import { useDispatch} from "react-redux";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function login(email: string, password: string) {
    setError(null);
    const response = await axios.post("http://localhost:5005/api/auth/login", {
      email: email,
      password: password,
    });
    console.log("from login0",response);
    if (response) {
      dispatch(signinSuccess(response.data));
      console.log("from login2",response);
      navigate("/");
    }
  }

  return { login, error };
};
