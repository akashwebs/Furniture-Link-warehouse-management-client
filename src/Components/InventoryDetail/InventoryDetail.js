import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const [details, setdetails] = useState({})
    const { idName } = useParams()
    const { name, image, price, supplier, discripton } = details;
    const [mainQuantity, setMainQuantity]=useState();

    useEffect(() => {
        const run = async () => {
            const { data } = await axios.get(`http://localhost:5000/inventory/${idName}`);
            setdetails(data);
            setMainQuantity(data.quantity);
            console.log(data)
        }
        run();
    }, [])

    // handle deliverd button

    const handleDeliverd=async()=>{
    const newQuantity=mainQuantity-1;
      setMainQuantity(newQuantity)
      const {data}=await axios.put(`http://localhost:5000/updateinventory?id=${idName}`,{newQuantity})
      console.log(data);
    }
    
    

    return (
        <div className='container'>
            <h1>inventory details</h1>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className='d-flex' style={{display:'block', height: '100%'}}>
                        <Card.Img variant="top" src={`${image}`} />
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='fs-3'>{name}</Card.Title>
                             <div>
                                <li>Price: {price}</li>
                                <li>Quantity: {mainQuantity}</li>
                                <li>Supplier: {supplier}</li>
                                <li>sold: {details?.sold}</li>
                            </div>
                            <Card.Text>
                                {discripton}
                            </Card.Text>
                            <Button onClick={handleDeliverd}>Delivered</Button>
                        </Card.Body>
                    </Card>
                </Col>
                )
            </Row>

        </div>
    );
};

export default InventoryDetail;