import { useState } from "react";
import { useAuthContext } from "./useAuthContex";
import axios from "axios";


export const useSignup = () => {

    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()

    async function signup(Name: string, email: string, password: string){
        setError(null)
        const response = await axios.post('http://localhost:5005/api/auth/register',{
            Name:Name, 
            email: email,
            password: password
         },
         
        )
    }

   return { signup, error }
 }