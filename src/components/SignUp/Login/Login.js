import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login mx-auto'>
            <div className="container">
                <h4 className='text-center'>Login</h4>
                <p>Login to use all features</p>
                <form
                    onSubmit={handleLogin}
                    className='d-flex flex-column'
                >
                    <input className='mb-2'
                        type="email" name="email" id="" placeholder='Email' required />
                    <input className='mb-2'
                        type="password" name="password" id="" placeholder='Password' required />
                    <p>Forgot Password? <button className='btn btn-link mb-1 p-0 text-decoration-none reset-text'>Reset</button></p>
                    <input className='mb-2 login-btn'
                        type="submit" value="Login" />
                </form>
                <p className=''>Don't have an Account? <Link to='/signup' className='text-decoration-none login-text'>Sign Up</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default Login;