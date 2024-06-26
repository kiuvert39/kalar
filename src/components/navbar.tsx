import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Input,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../store/user/userSlice";
import axios from "axios";
import Navicon from "./Navicon";
// import { IoPersonOutline } from "react-icons/io5";
// import { FiShoppingCart } from "react-icons/fi";




function NavbarMain() {
  const [openNav, setOpenNav] = useState(false);
  const   {currentUser} =   useSelector((state: any)  =>  state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)

    );}, []);

console.log('testing',currentUser);

   async function  HandleLoggout(){
      try{ 
       await axios.get("http://localhost:5005/api/auth/logout");
      dispatch(signout())
      localStorage.removeItem('currentUser');
      navigate('/Auth/login')
    }catch(error){ 
      console.log(error);
    }}

  

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={undefined}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        placeholder={undefined}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        placeholder={undefined}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/click" className="flex items-center">
          Contact
        </a>
        
      </Typography>
      <div className=""><Navicon/></div>
    </ul>
  );
  
  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-md">

      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        placeholder={undefined}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            placeholder={undefined}
            as="a"
            href="/click"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div  className="hidden">kalar tech</div>           
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max ">
            <Input placeholder={undefined}
              type="search"
              color="gray"
              label="Type here..."
              className="pr-20  "
              containerProps={{
               
              }} crossOrigin={undefined} />
            <Button placeholder={undefined}
              size="sm"
              color="black"
              className="!absolute right-1 top-1 rounded  w-46"
            >
              Search
            </Button>
          </div> 
          
          <div className="flex items-center gap-12">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {currentUser !== "incorrect email or password"  && currentUser  !== null ? (
                <Link to="Auth/login">
                  <Button
                    placeholder={undefined}
                    variant="gradient"
                    size="sm"
                    className=""
                    onClick={HandleLoggout}
                  >
                    <span>LOG OUT</span>
                  </Button>
                </Link>
              ):             
                (  <>
                    <Button
                      placeholder={undefined}
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={{ pathname: "/Auth/login" }}>Login</Link>
                    </Button>
                    <Link to="Auth/signup">
                      <Button
                        placeholder={undefined}
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                      >
                        <span>Sign in</span>
                      </Button>
                    </Link>
                  </> ) }          
            </div>
            <IconButton
              placeholder={undefined}
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Link to="profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                </Link>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
         
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              placeholder={undefined}
            >
              <Link to="Auth/login">Login</Link>
            </Button>
            <Link to="Auth/signup">
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                className=""
                placeholder={undefined}
              >
                Sign in
              </Button>
            </Link>
          </div>          
        </Collapse>      
      </Navbar>

    </div>
  );
}

export default NavbarMain;
