import React from 'react';
import Banner from '../Banner/Banner';
import LoadProducts from '../LoadProducts/LoadProducts';
import SellsChart from '../SellsChart/SellsChart';
import Testimonial from '../Testimonial/Testimonial';

const Dashboard = () => {

    return (
        <div>
            <Banner></Banner>
            <SellsChart></SellsChart>
            <LoadProducts></LoadProducts>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Dashboard;