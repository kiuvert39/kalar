import { Typography, Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Facebook } from "../images/facebook";
import { Google } from "../images/google";
import { userSchema, userValue } from "../../models/userSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignup } from "../../hooks/useSignup";
import "../../App.css";
import { useEffect } from "react";

function Register() {
  const {
   handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<userValue>({ resolver: zodResolver(userSchema) });
  const navigate = useNavigate();

  const { signup, error, verifyEmail } = useSignup();
  

  const onSubmit = async (data: userValue) => {
    try {
      await signup(data.Name, data.email, data.password);
      reset(); // Reset the form after successful signup
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Failed to create account. Please try again.');
    }
  };

  useEffect(() => {
    if (verifyEmail) {
      toast.info(verifyEmail);
      const timer = setTimeout(() => {
        window.location.href = '/Auth/login';
      }, 2000);
      
      // Cleanup timer if component unmounts before the timeout is finished
      return () => clearTimeout(timer);
    }
  }, [verifyEmail,navigate]);

  return (
    <div className="md:flex mt-20 justify-center">
      <ToastContainer />
      <div
        className="mt-7 pl-4 justify-center md:w-96 md:pt-4 rounded-3xl opacity-80
    md:mt-8 md:pb-5 md:bg-blue-gray-100"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" -ml-2 w-auto sm:-ml-7 flex justify-center items-center">
            <div className="text-xl md:text-3xl w-full sm:text-4xl text-center">
              Create An Account
            </div>
          </div>
          <div className="mt-2 mb-4 flex flex-col items-center sm:items-start justify-center mr-3 w-auto sm:max-w-92 sm:text-start sm:pl-5">
            <Typography
              variant="paragraph"
              className="text-xs font-normal font-poppins leading-5 w-full text-center sm:text-left"
              placeholder={undefined}
            >
              Let's get started by creating your account. Provide a strong password to keep your account safe.
            </Typography>
          </div>
          <div className="w-auto -ml-4 pl-4 pr-4 sm:mt-8 pb-5">
            <Controller
              name="Name"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  className="w-full"
                  size="md"
                  crossOrigin={true}
                  label="Name"
                  {...field}
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
            {errors.Name && typeof errors.Name.message === "string" && (
              <span className="text-red-800 text-sm">{errors.Name.message}</span>
            )}
          </div>

          <div className="pb-5 w-auto -ml-4 pl-4 pr-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  className="w-full"
                  size="md"
                  crossOrigin={true}
                  label="email"
                  {...field}
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
            {errors.email && typeof errors.email.message === "string" && (
              <span className="text-red-800 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="w-auto pb-5 -ml-4 mb-1 pl-4 pr-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  size="md"
                  crossOrigin={true}
                  label="password"
                  {...field}
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
            {errors.password && typeof errors.password.message === "string" && (
              <span className="text-red-800 text-sm">{errors.password.message}</span>
            )}
          </div>

          <div className="w-auto -ml-4 mb-1 pl-4 pr-4">
            <Controller
              name="confirm_password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  className="w-full"
                  size="md"
                  crossOrigin={true}
                  label="confirm password"
                  {...field}
                  placeholder={undefined}
                  color="green"
                />
              )}
            />
            {errors.confirm_password && typeof errors.confirm_password.message === "string" && (
              <span className="text-red-800 text-sm">{errors.confirm_password.message}</span>
            )}
          </div>

          <div className="w-auto -ml-4 -mb-1 p-4">
            <Button
              placeholder={undefined}
              className="w-full"
              variant="filled"
              type="submit"
              disabled={isSubmitting}
              color="green"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <Facebook />
            <Google />
          </div>
          <div className="mt-2 sm:ml-20 ml-16 justify-center">
            <Typography
              variant="small"
              placeholder={undefined}
              className="text-sm font-normal font-poppins"
            >
              Already have an account?
              <Link to={{ pathname: "/Auth/login" }}>Login</Link>
            </Typography>
          </div>
          {error && <span className="text-red-800 text-sm">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default Register;
