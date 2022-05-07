import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
    
    return (
        <div className='container text-center my-5 py-5'>
            <h2 style={{fontSize:'13rem',}} className='fw-bolder'>404</h2>
            <h3 className=''>opps! page not found</h3>
            <p>Sorry, the page your're looking for doesn't exist. If you think something is broken, report a problem.</p>
            <button onClick={()=>navigate('/')} className="btn-info py-2 px-3">Return Home</button>
        </div>
    );
};

export default NotFound;