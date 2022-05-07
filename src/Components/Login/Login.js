import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = logininfo =>{
         console.log(logininfo)
        };

    return (
        <div className='login-form'>

            <h2>Login into your account</h2>
            <form className='' onSubmit={handleSubmit(handleLogin)}>
                <input type={'email'} {...register("email")} placeholder='Enter Email' required/>
                <input {...register("password")} placeholder='Enter Password' required/>
                <input className='btn btn-primary' type="submit" value={'Login'} />
            </form>

            <hr />
            
            <SocialLogin></SocialLogin>
            <p className='text-center my-2'>
            Don't have an account? <Link to={'/registration'}>Registration here</Link>
            </p>
        </div>
    );
};

export default Login;