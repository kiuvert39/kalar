import { Authecontext } from "../context/AuthContext";
import { useContext } from "react";

 export const useAuthContext  = () => {
    const context = useContext(Authecontext)

    if (!context){
        throw new Error('authContext must be used inside and Authprovider') 
    } 
    return context
 }