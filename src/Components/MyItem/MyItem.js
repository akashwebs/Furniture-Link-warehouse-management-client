import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts/useProducts';
import Loading from '../Loading/Loading';

const MyItem = () => {
    const [myProducts, setMyProducts]=useState([]);
    const [products, setProducts]=useProducts();
    const [user, loading, error] = useAuthState(auth);
    const [isLoading, setIsLoading]=useState(false);
    const navigate=useNavigate();
    
    useEffect(()=>{
       const runMyitems=async()=>{
           const email=user.email;
           const url=`https://cryptic-escarpment-63139.herokuapp.com/products?email=${email}`
           try{
               setIsLoading(true)
            const {data}=await axios.get(url,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyProducts(data);
            setIsLoading(false)

           }catch(error){
            if(error.response.status===403 || error.response.status===401){
                signOut(auth);
                navigate('/login');
            }

           }
       }
       runMyitems();
    },[products])

    const handleDelete=async (id)=>{
        const isDelete=window.confirm('are you sure for delete?')
        if(isDelete){
            
            const allProducts=products.filter(product=> product._id!==id);
            setProducts(allProducts);
            const {data}=await axios.delete(`https://cryptic-escarpment-63139.herokuapp.com/ManageProduct/${id}`)
            toast.success('delete succesfully');
        }
    }
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className='container'>
        <h3 className='py-3'>My Items</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>image</th>
                    <th>supplier</th>
                    <th>quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    myProducts.map(product=>{
                        return  <tr
                        key={product._id}>
                        
                        <td>{product.name}</td>
                        <td>{product?.email}</td>
                        <td>{product.price}</td>
                        <td><img src={product.image} className='img-fluid w-25' alt="" /></td>
                        <td>{product.supplier}</td>
                        <td>{product.quantity}</td>
                        <td><button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                    })
                }
               
                
            </tbody>
        </Table>
        
    </div>
    );
};

export default MyItem;