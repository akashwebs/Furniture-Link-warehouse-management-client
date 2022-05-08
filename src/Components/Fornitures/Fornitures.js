import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import Fourniture from '../Fourniture/Fourniture';
import Loading from '../Loading/Loading'

const Fornitures = () => {
    const [fournitures, setFournitures,loading] = useProducts();
    const navigate=useNavigate()

  if(loading){
      return <Loading></Loading>
  }
    

   
    return (
     
      <div className='container'>
      <h2 className='heading'>Inve<span className='text-danger'>ntory</span> </h2>


       <Row xs={1} md={3} className="g-4">
        {
            fournitures.slice(0,6).map(furniture=><Fourniture furniture={furniture} key={furniture._id}></Fourniture>)
        }
       </Row>
       <div className='text-center'>
           <button onClick={()=>navigate('/ManageProduct')} className="btn-primary my-3 px-4 py-2">Manage Product</button>
       </div>
   </div>

    );
};

export default Fornitures;