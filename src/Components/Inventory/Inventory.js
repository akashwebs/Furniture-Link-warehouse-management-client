import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts/useProducts';
import './Inventory.css'


const Inventory = () => {

    const [isTrue, setIsTrue]=useState(false)
    const [products, setProducts]=useProducts(isTrue);
    const { register, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const handleAddInventory = async(addProducts) => {
        addProducts.email=user.email;
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
                    <input {...register("name")} placeholder='product name' required/>
                    <input type='number' {...register("quantity")} placeholder='quantity' required/>
                    <input type='number' {...register("price")} placeholder='price' required/>
                    <input {...register("supplier")} placeholder='supplier name' required/>
                    <textarea {...register("discripton")} placeholder='product details' required/>
                    <input {...register("image")} placeholder='image url here' required/>
                    <input className='btn btn-primary' type="submit" value={'Add Product'} />
                </form>
            </Col>
            
        </Row>


    );
};

export default Inventory;