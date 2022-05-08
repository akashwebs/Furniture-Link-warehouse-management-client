import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import './BestSell.css'

const BestSell = () => {
    const [products, setProducts]=useProducts(true);
    const [bestSell, setBestSell]=useState([]);
    useEffect(()=>{
        if(products.length>0){
            const newPd=[...products];
            newPd.reverse();
            setBestSell(newPd);
        }
    },[products])
    
    return (
       
            <div className='container '>
            <h2 className='heading'>Best <span className='text-danger'>Sell</span> </h2>
        <div className='border border-1 p-2'>
            {bestSell.map(pd=> <div className='d-flex border p-3 my-2'>
                <img src={pd.image} style={{width:'120px' ,height:'80px'}} alt="" />
               <div className='ms-3'>
               <h4>{pd.name}</h4>
               <span className='fw-bold'>Quantity: {pd.quantity}</span> |
               <span className='fw-bold'> Price: ${pd.price}</span>
               </div>
                

            </div>
            
            )}
        </div>
        </div>
        
    );
};

export default BestSell;