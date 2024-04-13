import { useState } from "react";
import { useAuthContext } from "./useAuthContex";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signinSuccess, signinFailure } from "../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

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

    if (response) {
      dispatch(signinSuccess(response.data));
      console.log(response);
      navigate("/");
    }
  }

  return { login, error };
};
