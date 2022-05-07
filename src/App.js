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
import Registration from './Components/Registration/Registration';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addItmes' element={
           <RequireAuth>
          <Inventory></Inventory>
           </RequireAuth>
        }></Route>
        <Route path='/inventory/:idName' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        
        }></Route>
        <Route path='/ManageProduct' element={
        <RequireAuth>
          <ManageProduct></ManageProduct>
        </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
           <RequireAuth>
             <MyItem></MyItem>
           </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>

  );
}

export default App;
