import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        name: 'Cloths',
        month: 'Jan',
        price: 80,
        sells: 110,
    },
    {
        name: 'Shoes',
        month: 'Feb',
        price: 110,
        sells: 180,
    },
    {
        name: 'Kids',
        month: 'Mar',
        price: 198,
        sells: 190,
    },
    {
        name: 'Women',
        month: 'Api',
        price: 190,
        sells: 250,
    },
    {
        name: 'Men',
        month: 'May',
        price: 300,
        sells: 330,
    },
    {
        name: 'Gift',
        month: 'June',
        price: 380,
        sells: 380,
    },
];

const data2 = [
    {
        year: '2010',
        sells: 190,
        profit: 200,
        invest: 400,
        lose: 120,
    },
    {
        year: '2012',
        sells: 250,
        profit: 220,
        invest: 500,
        lose: 80,
    },
    {
        year: '2014',
        sells: 300,
        profit: 500,
        invest: 700,
        lose: 150,
    },
    {
        year: '2018',
        sells: 250,
        profit: 300,
        invest: 1000,
        lose: 480,
    },
    {
        year: '2020',
        sells: 520,
        profit: 1108,
        invest: 1100,
        lose: 60,
    },
    {
        year: '2022',
        sells: 1400,
        profit: 1680,
        invest: 1700,
        lose: 380,
    },
];



const SellsChart = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className='border rounded-3'>
                        <h6 className='text-center text-secondary fw-bold mt-2'>Sells states last month</h6>
                        <BarChart
                            width={350}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                left: 5,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="price" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#8884d8" />
                            <Bar dataKey="sells" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
                <div className="col">
                    <div className='border rounded-3'>
                        <h6 className='text-center text-secondary fw-bold m-2'>Overview of last 12 years</h6>
                        <ComposedChart
                            width={350}
                            height={300}
                            data={data2}
                            margin={{
                                top: 5,
                                right: 20,
                                bottom: 10,
                                left: 5,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="year" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="invest" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="profit" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="sells" stroke="#ff7300" />
                            <Scatter dataKey="lose" fill="red" />
                        </ComposedChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellsChart;