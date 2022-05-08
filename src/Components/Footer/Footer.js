import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaTwitterSquare,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' py-5 bg-dark text-light text-center'>
            <h1>Furniture Link</h1>
            <div className='fs-5 d-grid g-3'>
                <Link to={'/'}>home</Link>
                <Link to={'/blog'}>blog</Link>
                <Link to={'/'}>inventory</Link>
            </div>
            <div className='fs-2 '>
                <Link className='text-white me-2' to={'/'}><FaFacebookSquare/></Link>
                <Link className='text-white me-2' to={'/'}><FaTwitterSquare/></Link>
                <Link className='text-white me-2' to={'/'}><FaLinkedin/></Link>
            </div>
        <div>
            <p>Copyright &copy; {new Date().getFullYear()} Furniture Link All Rights Reserved</p> 
        </div>
        </div>
    );
};

export default Footer;