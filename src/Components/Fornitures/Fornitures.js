import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Fourniture from '../Fourniture/Fourniture';

const Fornitures = () => {
    const [fournitures, setFournitures] = useState([]);
    useEffect(() => {
        const fethFournituers = async () => {

            const { data } = await axios.get('Fournitures.json')
            setFournitures(data);
        }
        fethFournituers();
    }, [])
    return (
        <div className='container'>
            product: {fournitures.length}


            <Row xs={1} md={3} className="g-4">
               {
                   fournitures.map(fourniture=><Fourniture
                    fourniture={fourniture}
                    key={fourniture?._id}
                   ></Fourniture>)
               }
            </Row>
        </div>
    );
};

export default Fornitures;