import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';

interface FormValues {
  otp: string[];
}
const Verification: React.FC = () => {
const email = useSelector((state:any) => state.user.email);
  const navigate = useNavigate();
 

  console.log("user email otp",email)

  const { control, handleSubmit, formState: { errors,isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      otp: ['', '', '', '', '', '']
    }
  });

  const onSubmit = async (data: { otp: string[] }) => {
    const otpCode = data.otp.join('');
    try {
      const response = await axios.post('https://kalar-sever.onrender.com/api/verifyOtp', { otp: otpCode, email});
      console.log(otpCode);
      if(response){
        toast.success('Otp verified successfully')
        setTimeout(() => {
          navigate('/'); 
        }, 5000);
        
      }
    } catch (error:any) {    
      toast.error(error.response.data.message)
      console.log(error);
    }
  }

  


  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <ToastContainer />
    <div className="bg-white p-8 rounded-lg shadow-md w-80 border-none sm:border sm:border-gray-300">
      <h2 className="text-2xl font-semibold text-center mb-6">Verify</h2>
      <p className="text-center mb-4">Your code was sent to you via email</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center space-x-2 mb-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Controller
              key={index}
              name={`otp.${index}` as const}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    field.onChange(e);
                    const nextInput = e.target.nextElementSibling as HTMLInputElement;
                    if (nextInput && e.target.value) {
                      nextInput.focus();
                    }
                  }}
                />
              )}
            />
          ))}
        </div>
        {errors.otp && <p className="text-red-500 text-center mb-4">All fields are required</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          {isSubmitting ? "verifying..." : "verify"}
        </button>
      </form>
      <p className="text-center mt-4">
        Didn't receive code? <a href="/auth/login" className="text-blue-500">Request again</a>
      </p>
    </div>
  </div>
);
};

export default Verification;