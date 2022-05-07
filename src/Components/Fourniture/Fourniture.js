import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Fourniture = ({fourniture}) => {
    
    
    const {name, image, price,discripton,quantity,supplier,_id }=fourniture;
    const navigate=useNavigate();

    const handleUpdateButton=(id)=>{
        navigate(`/inventory/${id}`)
    }
    
    
    return (
        <div>
            <Col>
                <Card style={{height: '34rem'}}>
                    <Card.Img variant="top" className='img-fluid px-2 py-4' style={{height:'190px'}} src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           
                            <p className='my-4'>{discripton.slice(0,150)}</p>
                            <p className='fw-bolder'>supplier: {supplier}</p>
                            <div className='d-flex justify-content-between'>
                            <h4>${price}</h4>
                            <h4>Q:{quantity}</h4>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <button onClick={()=>handleUpdateButton(_id)} className='btn btn-primary'>Update</button>
                </Card>
            </Col>
        </div>
    );
};

export default Fourniture;