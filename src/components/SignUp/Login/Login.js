import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorContainer;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordError] = useSendPasswordResetEmail(
        auth
    );

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async e => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent')
        }
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error || passwordError) {
        errorContainer = <p className='text-danger'>{error?.message || passwordError?.message}</p>
    }

    return (
        <div className='login mx-auto my-4'>
            <div className="container">
                <h4 className='text-center'>Login</h4>
                <p>Login to use all features</p>
                <form
                    onSubmit={handleLogin}
                    className='d-flex flex-column'
                >
                    <input className='mb-2'
                        type="email" name="email" id="" placeholder='Email' ref={emailRef} required />
                    <input className='mb-2'
                        type="password" name="password" id="" placeholder='Password' required />
                    <p>Forgot Password? <button
                        onClick={handleResetPassword}
                        className='btn btn-link mb-1 p-0 text-decoration-none reset-text'>Reset</button></p>
                    {errorContainer}
                    <input className='mb-2 login-btn login-btn-hover'
                        type="submit" value="Login" />
                </form>
                <p className=''>Don't have an Account? <Link to='/signup' className='text-decoration-none login-text'>Sign Up</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default Login;