import React from 'react';
import Banner from '../Banner/Banner';
import LoadProducts from '../LoadProducts/LoadProducts';
import SellsChart from '../SellsChart/SellsChart';

const Dashboard = () => {

    return (
        <div>
            <Banner></Banner>
            <SellsChart></SellsChart>
            <LoadProducts></LoadProducts>
        </div>
    );
};

export default Dashboard;