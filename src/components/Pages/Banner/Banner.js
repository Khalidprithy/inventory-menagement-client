import React from 'react';
import './Banner.css'
import { GiMoneyStack } from 'react-icons/gi';
import { GiPiggyBank } from 'react-icons/gi';
import { RiNumbersFill } from 'react-icons/ri';

const Banner = () => {
    return (
        <div className="banner-container container">
            <div>
                <h4>Hi User, Good Morning</h4>
                <p>Today's business progress and performance </p>
            </div>
            <div className='d-flex banner-card'>
                <RiNumbersFill className='sales-icon'></RiNumbersFill>
                <div className='ms-2'>
                    <p>Total Sales</p>
                    <h4>$175</h4>
                </div>
            </div>
            <div className='d-flex banner-card'>
                <GiMoneyStack className='money-icon'></GiMoneyStack>
                <div className='ms-2'>
                    <p>Total Cost</p>
                    <h4>$145</h4>
                </div>
            </div>
            <div className='d-flex banner-card'>
                <GiPiggyBank className='profit-icon'></GiPiggyBank>
                <div className='ms-2'>
                    <p>Profits</p>
                    <h4>$45</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;