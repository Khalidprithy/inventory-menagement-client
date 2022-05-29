import React from 'react';
import './Banner.css'
import { TiArrowRightThick } from 'react-icons/ti';
import { GiMoneyStack } from 'react-icons/gi';
import { GiPiggyBank, GiReceiveMoney } from 'react-icons/gi';
import { RiNumbersFill } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Banner = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="banner-container ms-4">
            <div className='ms-2'>
                <h4><span className='text-info fw-bold'>Hi {user?.displayName}</span> , Good Morning</h4>
                <p className='banner-text'>Welcome to Modern and Minimal inventory app. Here you can check all your product and business states. Our goal is to provide the best quality product to the customer. </p>
                <p className='text-secondary fw-bold'>Please login to use all features</p>
                <button className='manage-btn'>Explore more
                    <TiArrowRightThick></TiArrowRightThick>
                </button>
            </div>
            <div>
                <p className='text-info'>Today's Business Summery</p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-2 g-4">
                    <div className="col">
                        <div className='d-flex banner-card'>
                            <RiNumbersFill className='sales-icon'></RiNumbersFill>
                            <div className='ms-2'>
                                <p>Total Sales</p>
                                <h4>$175</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='d-flex banner-card'>
                            <GiMoneyStack className='money-icon'></GiMoneyStack>
                            <div className='ms-2'>
                                <p>Total Cost</p>
                                <h4>$145</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='d-flex banner-card'>
                            <GiPiggyBank className='profit-icon'></GiPiggyBank>
                            <div className='ms-2'>
                                <p>Profits</p>
                                <h4>$45</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='d-flex banner-card'>
                            <GiReceiveMoney className='invest-icon'></GiReceiveMoney>
                            <div className='ms-2'>
                                <p>Investment</p>
                                <h4>$200</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;