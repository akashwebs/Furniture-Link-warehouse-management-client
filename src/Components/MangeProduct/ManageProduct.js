import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts/useProducts';

const ManageProduct = () => {
    const [products, setProducts]=useProducts();
    const navigate=useNavigate();

    const handleDelete=async (id)=>{
        const isDelete=window.confirm('are you sure for delete?')
        if(isDelete){
            
            const allProducts=products.filter(product=> product._id!==id);
            setProducts(allProducts);
            const {data}=await axios.delete(`http://localhost:5000/ManageProduct/${id}`)
            console.log(data);
            toast.success('delete succesfully');
        }
    }
    
    
    return (
        <div className='container'>
            <h3 className='py-3'>Manage Inventory</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>image</th>
                        <th>supplier</th>
                        <th>quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>{
                            return  <tr
                            key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img src={product.image} className='img-fluid w-25' alt="" /></td>
                            <td>{product.supplier}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                        })
                    }
                   
                    
                </tbody>
            </Table>
            <div className='text-center'>
            <button onClick={()=>navigate('/addItmes')} className="btn-primary px-4 py-2">Add Product</button>

            </div>
        </div>
    );
};

export default ManageProduct;