import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Fourniture = ({ furniture }) => {


    const { _id, name, price, image, discripton,quantity, supplier } = furniture;
    const navigate = useNavigate();
    const handleUpdateButton = (id) => {
        navigate(`/inventory/${id}`)
    }


    return (


        <Col>
            <Card style={{ height: '34rem' }}>
                <Card.Img variant="top" className='img-fluid px-2 py-4' style={{ height: '190px' }} src={image} />

                <Card.Body>
                
                <div>
                    <h4>{name}</h4>
                    <ul>
                        <li>price: ${price}</li>
                        <li>quantity: {quantity}</li>
                        <li>supplier: {supplier}</li>
                        
                    </ul>
                    <p>{discripton.slice(0,150)}...</p>
                </div>

                </Card.Body>
                <button onClick={() => handleUpdateButton(_id)} className='btn btn-primary'>Update</button>
            </Card>
        </Col>

    );
};

export default Fourniture;