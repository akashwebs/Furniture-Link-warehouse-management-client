import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, gitLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, loading, gitError] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

   
    if (googleUser || gitUser) {
        navigate(from, { replace: true });
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()

    }

    const handleGitLogin = () => {
        signInWithGithub();

    }
   let errorMessage;
    if(googleError){
        errorMessage= <p>{googleError.message}</p>
    } 
    if(gitError){
        errorMessage= <p>{gitError?.message}</p>
    } 

    
    return (
        <div className='text-center'>
            <h4>Another Login: </h4>
            
            <span className='text-danger d-block'>{googleError?.message} {gitError?.message}</span>
            <button onClick={handleGoogleLogin} className='btn btn-danger py-2 px-3'>Google</button> <br />
            <button onClick={handleGitLogin} className='btn bg-dark text-light py-2 px-3 my-2'>Github</button>

        </div>
    );
};

export default SocialLogin;