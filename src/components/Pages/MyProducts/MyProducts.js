import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ShowMyProduct from './ShowMyProduct';

const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;

            const url = `http://localhost:5000/product?email=${email}`;
            fetch(url, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    setMyProducts(data)
                })

        }
        getMyProducts()
    }, [user])

    return (
        <div>
            <h4 className='text-center fw-bold m-2'>I have added {myProducts.length} product</h4>
            <div>
                {
                    myProducts.map(product => <ShowMyProduct
                        key={product._id}
                        product={product}
                    ></ShowMyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;