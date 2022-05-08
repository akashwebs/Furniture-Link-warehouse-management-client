import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const [details, setdetails] = useState({})
    const { idName } = useParams()
    const { name, image, price, supplier, discripton } = details;
    const [mainQuantity, setMainQuantity] = useState();
    const { register, handleSubmit,reset } = useForm();

    useEffect(() => {
        const run = async () => {
            const { data } = await axios.get(`https://cryptic-escarpment-63139.herokuapp.com/inventory/${idName}`);
            setdetails(data);
            setMainQuantity(data.quantity);
        }
        run();
    }, [])

    // handle restoke
  const handleRestock = async(stock) => {
    const newQuantity = stock.restock;
    if(!newQuantity){return toast.error('please give stock number')}
    const {data} = await axios.put(`https://cryptic-escarpment-63139.herokuapp.com/updateinventory?id=${idName}`, { newQuantity })
    setMainQuantity(newQuantity)
    reset();
    if(data.matchedCount){
       toast.success('successfully update')
    }else{
        toast.error('stock update faild')
    }
  };


    // handle deliverd button

    const handleDeliverd = async () => {
        const newQuantity = mainQuantity - 1;
        setMainQuantity(newQuantity)
        const { data } = await axios.put(`https://cryptic-escarpment-63139.herokuapp.com/updateinventory?id=${idName}`, { newQuantity })
    }



    return (
        <div className='container'>
            <h1>inventory details</h1>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className='d-flex' style={{ display: 'block', height: '100%' }}>
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

                            <form className='my-3 text-center' onSubmit={handleSubmit(handleRestock)}>
                                
                                <input type="number" {...register("restock")} placeholder=" update stock"/><br></br>
                                <input className='my-2 btn btn-danger' type="submit" value={'Restock'}/>
                            </form>

                        </Card.Body>
                    </Card>
                </Col>
                )
            </Row>

        </div>
    );
};

export default InventoryDetail;