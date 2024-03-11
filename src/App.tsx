import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarMain from './components/navbar';
import Home from './pages/Home';
import Orders from './components/Dashboard/Orders';
import Dashboard from './pages/dashborad/Dashboard';
import NewProduct from './components/Dashboard/addNewProduct';



function App() {
  return (
  <Router>
    <NavbarMain/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='dashboard' element={<Dashboard/>}>
          <Route path='add_new_product' element={<NewProduct/>}/>
          <Route path='orders' element={<Orders/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
