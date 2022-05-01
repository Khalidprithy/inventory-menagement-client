import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login w-50 mx-auto'>
            <div>
                <form className=''>
                    <h4>Sign In</h4>
                    <p>Login to use all feature</p>
                    <div className='d-flex flex-column mx-auto'>
                        <input className='mb-2' type="email" placeholder='Email' required />
                        <input className='mb-2' type="password" name="password" id="" placeholder='Password' required />
                        <p>Forgot Password? <button className='btn btn-link text-decoration-none ps-0'>Reset Password</button> </p>
                        <input className='btn btn-primary' type="button" value="Sign In" />
                    </div>
                    <p className='mt-4'>Create an Account <Link to='/signup' className='text-decoration-none'>Sign Up</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Login;