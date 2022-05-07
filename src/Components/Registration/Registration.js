import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const { register, handleSubmit } = useForm();

    const handleRegistration = signUpData =>{
         console.log(signUpData)
        };

    
    
    
    return (
        <div className='login-form'>

            <h2>Create An Account</h2>
            <form className='' onSubmit={handleSubmit(handleRegistration)}>
                <input {...register("name")} placeholder='Enter Your full name' required/>
                <input type={'email'} {...register("email")} placeholder='Enter Email' required/>
                <input type={'password'} {...register("password")} placeholder='Enter Password' required/>
                <input className='btn btn-primary' type="submit" value={'Registration'} />
            </form>
            <SocialLogin></SocialLogin>
            <p className='text-center my-2'>
            already have an account? <Link to={'/login'}>login here</Link>
            </p>
        </div>
    );
};

export default Registration;