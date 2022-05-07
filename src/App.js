import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import { ToastContainer } from 'react-toastify';
import ManageProduct from './Components/MangeProduct/ManageProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addItmes' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:idName' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/ManageProduct' element={<ManageProduct></ManageProduct>}></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
    
  );
}

export default App;
