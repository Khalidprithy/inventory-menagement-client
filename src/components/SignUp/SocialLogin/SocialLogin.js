import React from 'react';
import './SocialLogin.css'
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithFacebook, user, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (facebookLoading || googleLoading) {
        return <Loading></Loading>
    }

    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h6 className='text-center'> - Or Sign In With - </h6>
            <div className="d-flex justify-content-around mb-3">
                <div className="col-4"> <AiFillFacebook onClick={() => signInWithFacebook()} className='icons facebook-icon' ></AiFillFacebook> </div>
                <div className="col-4"> <AiFillGoogleSquare onClick={() => signInWithGoogle()} className='icons google-icon'></AiFillGoogleSquare> </div>
                {facebookError || googleError}
            </div>
        </div>
    );
};

export default SocialLogin;