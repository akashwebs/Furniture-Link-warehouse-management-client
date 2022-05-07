import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import Fourniture from '../Fourniture/Fourniture';

const Fornitures = () => {
    const [fournitures, setFournitures] = useProducts([]);
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
        </div>
    );
};

export default Fornitures;