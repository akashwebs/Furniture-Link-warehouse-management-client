import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import Fourniture from '../Fourniture/Fourniture';

const Fornitures = () => {
    const [fournitures, setFournitures] = useProducts([]);
    const navigate=useNavigate()
    /* 
    useEffect(() => {
        const fethFournituers = async () => {

            const { data } = await axios.get('http://localhost:5000/furniture')
            setFournitures(data);
        }
        fethFournituers();
    }, []) */
    return (
        <div className='container'>
            product: {fournitures.length}


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