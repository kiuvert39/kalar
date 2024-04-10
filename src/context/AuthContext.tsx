import {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import axios from "axios";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const Authecontext = createContext<AuthContextType | undefined>(
  undefined
);

export function Authreducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN": {
      return { user: action.payload };
    }

    case "LOGout": {
      return { user: null };
    }
    default:
      return state;
  }
}

export const Authecontextprovider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/auth/status");
      setIsLoggedIn(response.data.authenticated);
      console.log(response);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Authecontext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </Authecontext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(Authecontext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
