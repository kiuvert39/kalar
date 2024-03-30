import {
  Typography,
  Button,
  IconButton,
  Collapse,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { Facebook } from "../images/facebook";
import { Google } from "../images/google";
import { userSchema, userValue } from "../../models/userSchema";
import { Controller, useForm, Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginValue } from "../../models/loginSchema";


function Login() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<loginValue>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async(data: loginValue,e:any) => {
    try{
      await new Promise((resolve)=>setTimeout(resolve,1000))
      console.log(data);
      reset();
    }
    catch(error){
      setError('root',{message: "email is already taken"})
    }
  };
  
  return (
    <div className="md:flex -gap-1">
    <div
      className=" mt-7 pl-4 justify-center md:w-96 md:pt-5 rounded-3xl opacity-80
 md:ml-96 md:mt-8 md:pb-5 md:bg-blue-gray-100"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" justify-center">
          <div className=" -ml-2  w-auto sm:-ml-7 sm:justify-center">
            <Typography
              variant="h2"
              className="text-xl pl-12 md:text-3xl w-full sm:text-4xl"
              placeholder={undefined}
            >
        
              Welcome Back
            </Typography>
          </div>
          <div className="mt-2  mb-4 ml-4 mr-4 w-auto sm:max-w-92 sm:text-start sm:pl-5 ">
            <Typography
              variant="paragraph"
              className=" text-xs font-normal font-poppins leading-5 w-full"
              placeholder={undefined}
            >
              Let's get started by creating your account. provide
              <br /> a strong password. to keep your account safe
            </Typography>
          </div>
        </div>
        <div className=" pb-5  w-auto -ml-4 pl-4 pr-4 ">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  className="w-full "
                  size="md"
                  {...register("email")}
                  crossOrigin={true}
                  label="email"
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
             {errors.email && typeof errors.email.message === "string" && (<span className=" text-red-800 text-sm ">{errors.email.message}</span>)}
          </div>
          <div className=" w-auto pb-5  -ml-4  mb-1 pl-4 pr-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  size="md"
                  {...register("password")}
                  crossOrigin={true}
                  label="password"
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
             {errors.password && typeof errors.password.message === "string" && (<span className=" text-red-800 text-sm">{errors.password.message}</span>)}
          </div>
        <div className=" w-auto -ml-4  mb-4 p-4">
          <Button
            placeholder={undefined}
            className=" w-full"
            variant="filled"
            disabled={isSubmitting}
            type='submit'
            color="green"
          >
            {isSubmitting ? "logining...":"login"}
            
          </Button>
        
        </div>
        {errors.root && typeof errors.root.message === "string" && (<span className=" text-red-800 text-sm ">{errors.root.message}</span>)}
        <div className=" flex gap-4 justify-center">
          <Facebook />
          <Google />
        </div>
        <div className=" mt-2 sm:ml-20 ml-16 justify-center">
          <Typography
            variant="small"
            placeholder={undefined}
            className="text-sm font-normal font-poppins"
          >
            You don't an account? <Link  to={{ pathname: "/Auth/signup"}}>signup</Link>
          </Typography>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login