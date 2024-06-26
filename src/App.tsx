import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar";
import Home from "./pages/Home";
import Orders from "./components/Dashboard/Orders";
import Dashboard from "./pages/dashborad/Dashboard";
import NewProduct from "./components/Dashboard/addNewProduct";
import Register from "./components/Auth/register";
import Notfoundpage from "./pages/notfound.page";
import Login from "./components/Auth/login";
import { ToastContainer } from "react-toastify";
import Productdetails from "./components/products/Product.details";
import Protected from "./components/protected";
import ProfileEdit from "./components/Account/Profile";
import Verification from "./components/Auth/VerifyOtp";
// import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <NavbarMain />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Auth/signup" element={<Register />} />

        <Route path="Auth/login" element={<Login />} />
        <Route element={<Protected  />}>
          <Route path="/Auth/verify/otp" element={<Verification />} />
        </Route> 

        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/profile" element={<ProfileEdit />} />

        <Route element={<Protected/>}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add_new_product" element={<NewProduct />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>

        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
