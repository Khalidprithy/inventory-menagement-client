import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user.email;
            const url = `http://localhost:5000/products?email=${email}`;
            const { data } = await axios.get(url);
            setMyProducts(data);
        }
        getMyProducts()
    }, [])

    return (
        <div>
            <h4>My products {myProducts.length}</h4>
        </div>
    );
};

export default MyProducts;