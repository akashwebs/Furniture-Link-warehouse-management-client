import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const ForgotPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit } = useForm();

    
    const handleForgotPaswword = async logininfo => {
        const email=logininfo.email;
        if(email){
        await sendPasswordResetEmail(email);
           toast.success('reset link sent in your email') 
        }
    };
    
    

    let errorMessage;

    if (error) {
        
        errorMessage = <p className='text-danger'>{error?.message}</p>;
    }

    if(sending){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='login-form'>

                <h2>Forgot your Password</h2>
                <form className='' onSubmit={handleSubmit(handleForgotPaswword)}>
                    <input type={'email'} {...register("email")} placeholder='Enter Email' required />
                    
                    <input className='btn btn-primary' type="submit" value={'Forgot Password'} />
                </form>

                <hr />

                {errorMessage}

                <SocialLogin></SocialLogin>
                <p className='text-center my-2'>
                    Don't have an account? <Link to={'/login'}>login here</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;