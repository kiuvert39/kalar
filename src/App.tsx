import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewProduct from './pages/dashborad/addNewProduct';


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/new-product' element={<AddNewProduct/>}/>
    </Routes>
  </Router>
  );
}

export default App;
