import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Fourniture from '../Fourniture/Fourniture';

const Fornitures = () => {
    const [fournitures, setFournitures] = useState([]);
    useEffect(() => {
        const fethFournituers = async () => {

            const { data } = await axios.get('http://localhost:5000/furniture')
            setFournitures(data);
        }
        fethFournituers();
    }, [])
    return (
        <div className='container'>
            product: {fournitures.length}


            <Row xs={1} md={3} className="g-4">
             {
                 fournitures.map(furniture=><Fourniture furniture={furniture} key={furniture._id}></Fourniture>)
             }
            </Row>
        </div>
    );
};

export default Fornitures;