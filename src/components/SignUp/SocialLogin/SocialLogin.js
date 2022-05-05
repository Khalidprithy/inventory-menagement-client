import React from 'react';
import './SocialLogin.css'
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate();
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    if (user || googleUser) {
        navigate('/dashboard')
    }

    return (
        <div>
            <h6 className='text-center'> - Or Sign In With - </h6>
            <div className="d-flex justify-content-around mb-3">
                <div className="col-4"> <AiFillFacebook onClick={() => signInWithFacebook()} className='icons facebook-icon' ></AiFillFacebook> </div>
                <div className="col-4"> <AiFillGoogleSquare onClick={() => signInWithGoogle()} className='icons google-icon'></AiFillGoogleSquare> </div>
            </div>
        </div>
    );
};

export default SocialLogin;