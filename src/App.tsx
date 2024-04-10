import './App.css';
import { BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom';
import NavbarMain from './components/navbar';
import Home from './pages/Home';
import Orders from './components/Dashboard/Orders';
import Dashboard from './pages/dashborad/Dashboard';
import NewProduct from './components/Dashboard/addNewProduct';
import Register from './components/Auth/register';
import Notfoundpage from './pages/notfound.page';
import Login from './components/Auth/login';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './context/AuthContext';



function App() {
  return (
  <Router>
    <NavbarMain/>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Auth/signup' element={<Register/>}/>
      <Route path='Auth/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='add_new_product' element={<NewProduct/>}/>
          <Route path='orders' element={<Orders/>}/>
      </Route>

      <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
  </Router>
  );
}




export default App;
