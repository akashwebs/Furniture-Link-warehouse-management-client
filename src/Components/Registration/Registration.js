import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    const { register, handleSubmit } = useForm();
    const navgiate = useNavigate();
    const [loginUser] = useAuthState(auth);

    if (loginUser) {
        navgiate('/')
    }

    const handleRegistration = async (signUpData) => {
        console.log(signUpData)
        await createUserWithEmailAndPassword(signUpData.email, signUpData.password);
        toast('send a verify email')
    };


    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div className='login-form'>

            <h2>Create An Account</h2>
            <form className='' onSubmit={handleSubmit(handleRegistration)}>
                <input {...register("name")} placeholder='Enter Your full name' required />
                <input type={'email'} {...register("email")} placeholder='Enter Email' required />
                <input type={'password'} {...register("password")} placeholder='Enter Password' required />
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