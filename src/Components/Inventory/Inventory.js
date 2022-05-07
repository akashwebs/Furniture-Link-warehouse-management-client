import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useProducts from '../../Hooks/useProducts/useProducts';
import './Inventory.css'


const Inventory = () => {

    const [isTrue, setIsTrue]=useState(false)
    const [products, setProducts]=useProducts(isTrue);
    const { register, handleSubmit } = useForm();
    
    
    const handleAddInventory = async(addProducts) => {

       const {data} =await axios.post(`http://localhost:5000/furniture`,addProducts)
       setIsTrue(true)
    };

    return (
        <Row xs={1} md={2} className="g-4 container my-4 mx-auto">
            <Col>
            <h3>All Product: {products.length}</h3>
            {
                products.map(product=><div 
                    key={product._id}
                    className='add-product-box'
                >
                    {product.name}
                </div>)
            }
            </Col>
            <Col>
                <h3>Add Product</h3>
                <form className='add-product' onSubmit={handleSubmit(handleAddInventory)}>
                    <input {...register("name")} placeholder='product name' />
                    <input type='number' {...register("quantity")} placeholder='quantity' />
                    <input type='number' {...register("price")} placeholder='price' />
                    <input {...register("supplier")} placeholder='supplier name' />
                    <textarea {...register("discripton")} placeholder='product details' />
                    <input {...register("image")} placeholder='image url here' />
                    <input className='btn btn-primary' type="submit" value={'Add Product'} />
                </form>
            </Col>
            
        </Row>


    );
};

export default Inventory;