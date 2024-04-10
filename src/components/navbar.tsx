import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContex";
import { useAuth } from "../context/AuthContext";
import { Toast } from "react-toastify/dist/components";



function NavbarMain() {
  const [openNav, setOpenNav] = useState(false);

  const { isLoggedIn, login, logout } = useAuth();


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)

    );


  }, []);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={undefined}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/click" className="flex items-center">
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
        <a href="/cl" className="flex items-center">
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
    </ul>
  );
  return (
    <div className="sticky top-0">

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
            KallarTech
          </Typography>
          {/* <div className="relative flex w-full gap-2 md:w-max">
            <Input placeholder={undefined}
              type="search"
              color="gray"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }} crossOrigin={undefined} />
            <Button placeholder={undefined}
              size="sm"
              color="black"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div> */}
          <div className="flex items-center gap-12">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {isLoggedIn ? (
                <Link to="Auth/login">
                  <Button
                    placeholder={undefined}
                    variant="gradient"
                    size="sm"
                    className=""
                    onClick={logout}
                  >
                    <span>LOG OUT</span>
                  </Button>
                </Link>
              ) :
                (
                  <>
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
                  </>)
              }
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
              <Link to={{ pathname: "/Auth/login" }}>Login</Link>
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
