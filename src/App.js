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
import MyItem from './Components/MyItem/MyItem';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addItmes' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:idName' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/ManageProduct' element={<ManageProduct></ManageProduct>}></Route>
      <Route path='/myitem' element={<MyItem></MyItem>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
    
  );
}

export default App;
