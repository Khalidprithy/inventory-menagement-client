import React from 'react';
import './Banner.css'
import { GiMoneyStack } from 'react-icons/gi';
import { GiPiggyBank, GiReceiveMoney } from 'react-icons/gi';
import { RiNumbersFill } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Banner = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="banner-container">
            <div>
                <h4><span className='text-info fw-bold'>Hi {user?.displayName}</span> , Good Morning</h4>
                <p>Today's business progress and performance </p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-2 g-4">
                <div class="col">
                    <div className='d-flex banner-card'>
                        <RiNumbersFill className='sales-icon'></RiNumbersFill>
                        <div className='ms-2'>
                            <p>Total Sales</p>
                            <h4>$175</h4>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className='d-flex banner-card'>
                        <GiMoneyStack className='money-icon'></GiMoneyStack>
                        <div className='ms-2'>
                            <p>Total Cost</p>
                            <h4>$145</h4>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className='d-flex banner-card'>
                        <GiPiggyBank className='profit-icon'></GiPiggyBank>
                        <div className='ms-2'>
                            <p>Profits</p>
                            <h4>$45</h4>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className='d-flex banner-card'>
                        <GiReceiveMoney className='invest-icon'></GiReceiveMoney>
                        <div className='ms-2'>
                            <p>Investment</p>
                            <h4>$1000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;