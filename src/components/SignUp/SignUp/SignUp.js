import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState();
    const [agree, setAgree] = useState(false);

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleCreateUser = async e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (user) {
            setShowError('User already exists')
            return;
        }
        if (password !== confirmPassword) {
            setShowError('Password did not matched')
            return;
        }
        if (password.length < 8) {
            setShowError('Password must be 8 character or longer')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        navigate('/dashboard')
    }

    if (user) {
        console.log(user)
    }

    if (loading || updating) {
        return <Loading></Loading>
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
                    <p className='text-danger p-0 m-0'>{showError}</p>
                    <p>{error}</p>

                    <div>
                        <input
                            onClick={() => setAgree(!agree)}
                            type="checkbox" name="terms" id="" />
                        <label className='ms-2 mb-2' htmlFor="terms">I agree with the terms of use </label>
                    </div>
                    <input
                        disabled={!agree}
                        className={`mb-2 login-btn ${!agree ? '' : 'login-btn-hover'}`}
                        type="submit" value="Sign Up" />
                </form>
                <p className=''>Already have an Account? <Link to='/login' className='text-decoration-none login-text'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default SignUp;