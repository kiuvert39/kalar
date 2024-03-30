import { Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { Link} from "react-router-dom";
import { Facebook } from "../images/facebook";
import { Google } from "../images/google";
import { userSchema, userValue } from "../../models/userSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<userValue>({ resolver: zodResolver(userSchema) });

  
  const onSubmit = async(data: userValue,e:any) => {
    try{
      await new Promise((resolve)=>setTimeout(resolve,1000))
     
      console.log(data);
      reset();
    }
    catch(error){
      setError("root", { message: "email is already taken" });
    }
   
  };
  return (
    <div className="md:flex -gap-1">
      <div
        className=" mt-7 pl-4 justify-center md:w-96 md:pt-4 rounded-3xl opacity-80
   md:ml-96 md:mt-8 md:pb-5 md:bg-blue-gray-100 "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" justify-center">
            <div className=" -ml-2  w-auto sm:-ml-7 sm:justify-center mb-5">
              <Typography
                variant="h2"
                className="text-xl pl-16 md:text-3xl w-full sm:text-4xl"
                placeholder={undefined}
              >
                Create An Account
              </Typography>
            </div>
          </div>
          <div className=" w-auto -ml-4 pl-4 pr-4 sm:mt-8 pb-5 ">
            <Controller
              name="Name"
              control={control}
              render={({ field }) => (
                <Input
                  type="name"
                  className="w-full "
                  size="md"
                  crossOrigin={true}
                  label="Name"
                  {...register("Name")}
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
             {errors.Name && typeof errors.Name.message === "string" && (<span className=" text-red-800 text-sm">{errors.Name.message}</span>)}
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
         
          <div className=" w-auto -ml-4  mb-1 pl-4 pr-4">
            <Controller
              name="confirm_password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  size="md"
                  {...register("confirm_password")}
                  crossOrigin={true}
                  label="password"
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
             {errors.confirm_password && typeof errors.confirm_password.message === "string" && (<span className=" text-red-800 text-sm">{errors.confirm_password.message}</span>)}
          </div>
         
          <div className=" w-auto -ml-4  -mb-1 p-4">
            <Button
              placeholder={undefined}
              className=" w-full"
              variant="filled"
            type='submit'
            disabled={isSubmitting}

              color="green"
            >
              {isSubmitting ? "Submiting...":"signup"}
            </Button>
          </div>
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
              Already have an account?
              <Link to={{ pathname: "/Auth/login" }}>Login</Link>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;