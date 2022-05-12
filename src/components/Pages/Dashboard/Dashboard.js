import React from 'react';
import Banner from '../Banner/Banner';
import LoadProducts from '../LoadProducts/LoadProducts';
import ShowProducts from '../ShowProducts/ShowProducts';

const Dashboard = () => {

    return (
        <div>
            <Banner></Banner>
            <LoadProducts></LoadProducts>
        </div>
    );
};

export default Dashboard;