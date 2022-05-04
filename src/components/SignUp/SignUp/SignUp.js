import React from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/dashboard')
    }

    return (
        <div className='signup mx-auto'>
            <div className="container">
                <h4 className='text-center'>Sign Up</h4>
                <p>Create your M&M account</p>
                <form className='d-flex flex-column'
                    onSubmit={handleCreateUser}
                >
                    <input className='mb-2'
                        type="text" name="name" id="" placeholder='Name' />
                    <input className='mb-2'
                        type="email" name="email" id="" placeholder='Email' required />
                    <input className='mb-2'
                        type="password" name="password" id="" placeholder='Password' required />
                    <input className='mb-2'
                        type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                    <div>
                        <input type="checkbox" name="terms" id="" />
                        <label className='ms-2 mb-2' htmlFor="terms">I agree with the terms of use </label>
                    </div>

                    <input className='mb-2 login-btn'
                        type="submit" value="Sign Up" />
                </form>
                <p className=''>Already have an Account? <Link to='/login' className='text-decoration-none login-text'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default SignUp;