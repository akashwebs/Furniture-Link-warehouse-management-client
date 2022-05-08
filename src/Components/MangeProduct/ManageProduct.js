import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts/useProducts';
import Loading from '../Loading/Loading';

const ManageProduct = () => {
    const [products, setProducts,loading]=useProducts();
    const navigate=useNavigate();

    const handleDelete=async (id)=>{
        const isDelete=window.confirm('are you sure for delete?')
        if(isDelete){
            
            const allProducts=products.filter(product=> product._id!==id);
            setProducts(allProducts);
            const {data}=await axios.delete(`https://cryptic-escarpment-63139.herokuapp.com/ManageProduct/${id}`)
            toast.success('delete succesfully');
        }
    }
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className='container mb-4' style={{overflowpX:'auto'}}>
            <h3 className='py-3'>Manage Inventory</h3>
            <Table className='table' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
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
                            <td>{product?.email}</td>
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