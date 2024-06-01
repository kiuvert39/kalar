import { Typography, Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Facebook } from "../images/facebook";
import { Google } from "../images/google";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginValue } from "../../models/loginSchema";
import { useLogin } from "../../hooks/useLogin";
// import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "../../App.css"

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<loginValue>({ resolver: zodResolver(loginSchema) });
  const { login } = useLogin();
 
  // const [requestError, setRquestError] = useState("");
  // const  currentUser  = useSelector((state: any) => state.user.currentUser);
  // const [ratelimiter, setRatelimiter]=useState("")
  
 
  const onSubmit = async (data: loginValue, e: any) => {
    try {
      const response = await login(data.email, data.password);
      console.log("login  response",response);
      reset();
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        const errorMessage = error.response.data.message;
        console.log(errorMessage);        
        // dispatch(signinFailure(errorMessage));
        toast.info(error.response.data.message,{
          className: "toast-message"
        });
        // setRquestError(errorMessage);
      }else {
        // dispatch(signinFailure("An unexpected error occurred"));
        toast.error(error.response.data.message,{
          className: "toast-message"
        });
      }
    }
  };
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);
  return (
    <>
      <div className="md:flex -gap-1 mt-28 md:mt-16 justify-center ">
      <ToastContainer />
        <div
          className=" mt-12 pl-4 justify-center md:w-96 md:pt-5 rounded-3xl opacity-80
   md:pb-5 md:bg-blue-gray-100"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" justify-center">
            <div className=" -ml-2 w-auto sm:-ml-7 flex justify-center items-center">
              <div className="text-xl  md:text-3xl w-full sm:text-4xl text-center">
                Welcome Back
              </div>
            </div>

              <div  className="justify-center flex">
              <div className="mt-2 mb-4 flex flex-col items-center sm:items-start justify-center mr-3 w-auto sm:max-w-92 sm:text-start sm:pl-5">
                <Typography
                  variant="paragraph"
                  className="text-xs font-normal font-poppins leading-5 w-full text-center sm:text-left"
                  placeholder={undefined}
                >
                  Let's get started by creating your account. Provide a strong password to keep your account safe.
                </Typography>
                <span className="text-red-800 text-sm text-center sm:text-left">
                  {/* {requestError ? requestError || "Something went wrong" : " "} */}
                </span>
              </div>

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
              {errors.email && typeof errors.email.message === "string" && (
                <span className=" text-red-800 text-sm ">
                  {errors.email.message}
                </span>
              )}
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
              {errors.password &&
                typeof errors.password.message === "string" && (
                  <span className=" text-red-800 text-sm">
                    {errors.password.message}
                  </span>
                )}
            </div>
            <div className=" w-auto -ml-4  mb-4 p-4">
              <Button
                placeholder={undefined}
                className=" w-full"
                variant="filled"
                disabled={isSubmitting}
                type="submit"
                color="green"
              >
                {isSubmitting ? "logining..." : "login"}
              </Button>
            </div>
            {errors.root && typeof errors.root.message === "string" && (
              <span className=" text-red-800 text-sm ">
                {errors.root.message}
              </span>
            )}
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
                You don't an account?
                <Link to={{ pathname: "/Auth/signup" }}>signup</Link>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
