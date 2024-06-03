import { useState } from "react";
import axios from "axios";


export const useSignup = () => {

    const [error, setError] = useState(null)
    
    async function signup(Name: string, email: string, password: string){
        setError(null)
        await axios.post('https://kalar-sever.onrender.com/api/auth/register',{
            Name:Name, 
            email: email,
            password: password
         },
         
        )
    }

   return { signup, error }
 }