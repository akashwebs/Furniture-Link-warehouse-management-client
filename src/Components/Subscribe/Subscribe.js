import React from 'react';

const Subscribe = () => {
    return (
      <div style={{backgroundColor:'#C8E7E1'}} className='py-4 mt-3'>
            <div className='text-center container py-5'>
            <h2>Subscribe</h2>
            <p>Subscribe our newsletter to stay updated every moment</p>
            <div className='d-flex w-50 mx-auto'>
                <input className='form-control me-2' type="text" placeholder='Enter a Valid Email Address' />
                <input className='btn btn-danger py-2 px-4' type="submit" value={'Submit'} />
            </div>
        </div>
      </div>
    );
};

export default Subscribe;