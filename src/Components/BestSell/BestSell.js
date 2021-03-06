import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import Loading from '../Loading/Loading';
import './BestSell.css'

const BestSell = () => {
    const [products, setProducts, sppiner] = useProducts(true);
    const [bestSell, setBestSell] = useState([]);

    useEffect(() => {
        if (products.length > 0) {

            const sortedNumber = products.sort((a, b) => {
                const quantity1 = parseInt(a.quantity)
                const quantity2 = parseInt(b.quantity)
                return quantity1 - quantity2;
            });
            sortedNumber.reverse()
            setBestSell(sortedNumber);
        }
    }, [products])


    if (sppiner) {
        return <Loading></Loading>
    }

    return (

        <div className='container '>
            <h2 className='heading'>Best <span className='text-danger'>Sell</span> </h2>
            <div className='border border-1 p-2'>
                {bestSell.map(pd => <div key={pd._id} className='d-flex border p-3 my-2'>
                    <img src={pd.image} style={{ width: '120px', height: '80px' }} alt="" />
                    <div className='ms-3'>
                        <h4>{pd.name}</h4>
                        <div><span className='fw-bold'>Quantity: {pd.quantity}</span> |
                        <span className='fw-bold'> Price: ${pd.price}</span></div>
                        <div className="btn btn-primary">Details</div>
                    </div>


                </div>

                )}
            </div>
        </div>

    );
};

export default BestSell;