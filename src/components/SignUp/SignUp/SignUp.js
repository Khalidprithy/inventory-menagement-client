import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login w-50 mx-auto'>
            <div>
                <form className=''>
                    <h4>Sign Up</h4>
                    <p>Create your M&M account.</p>
                    <div className='d-flex flex-column mx-auto'>
                        <input className='mb-2' type="text" placeholder='Name' required />
                        <input className='mb-2' type="email" placeholder='Email' required />
                        <input className='mb-2' type="password" name="password" id="" placeholder='Password' required />
                        <input className='mb-2' type="password" name="password" id="" placeholder='Confirm Password' required />

                        <div>
                            <input type="checkbox" name="" id="checkbox" />
                            <label className='ms-1 mb-1' htmlFor="checkbox">Accept terms and condition</label>
                        </div>

                        <input className='btn btn-primary' type="button" value="Sign Up" />
                    </div>
                    <p className='mt-4'>Already have an Account? <Link to='/login' className='text-decoration-none'>Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default SignUp;