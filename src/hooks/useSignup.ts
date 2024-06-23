import { useState } from "react";
import axios from "axios";

interface SignupResponse {
    verifyemail: string;
    // Include other properties of the response if needed
}


export const useSignup = () => {
    const [error, setError] = useState<string | null>(null);
    const [verifyEmail, setVerifyEmail] = useState<string | null>(null);

    async function signup(Name: string, email: string, password: string) {
        setError(null);
        try {
            const response = await axios.post<SignupResponse>('https://kalar-sever.onrender.com/api/auth/register', {
                Name: Name,
                email: email,
                password: password
            });console.log(response.data.verifyemail);
            
            setVerifyEmail(response.data.verifyemail);  
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
               
                setError(err.response.data.message); 
            } else {
              setError('An unexpected error occurred');
            }
        }
    }

    return { signup, error, verifyEmail };
};
