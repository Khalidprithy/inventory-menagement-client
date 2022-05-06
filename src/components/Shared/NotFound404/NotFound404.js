import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <img className='w-75' src="https://templates.iqonic.design/posdash/html/assets/images/error/404.png" alt="" />
            </div>
            <div className='text-center'>
                <h4>Oops! This Page is Not Found</h4>
                <Link to='/dashboard'>Back to Dashboard</Link>
            </div>
        </div>

    );
};

export default NotFound404;