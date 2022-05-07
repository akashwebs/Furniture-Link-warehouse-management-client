import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [products, setProducts]=useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();

    useEffect(()=>{
       const runMyitems=async()=>{
           const email=user.email;
           const url=`http://localhost:5000/products?email=${email}`
           try{
            const {data}=await axios.get(url,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setProducts(data);

           }catch(error){
            if(error.response.status===403 || error.response.status===401){
                signOut(auth);
                navigate('/login');
            }

           }
       }
       runMyitems();
    },[])
    
    return (
        <div>
            <h2>this is my items{products.length}</h2>
        </div>
    );
};

export default MyItem;