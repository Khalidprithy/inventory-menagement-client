import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ShowMyProduct from './ShowMyProduct';

const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    console.log(myProducts)
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/product?email=${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMyProducts(data)
                })
        }
        getMyProducts()
    }, [user])

    const handleDeleteBtn = (id) => {
        console.log(id)
        const email = user?.email;
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product?email=${email}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = myProducts.filter(product => product._id !== id);
                        setMyProducts(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h4 className='text-center fw-bold m-2 text-info'>You have added {myProducts?.length} product</h4>
            <div>
                <table className="table m-2">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th className='d-none d-md-block' scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th className='d-none d-md-block' scope="col">Supplier</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        myProducts?.map(product => <ShowMyProduct
                            key={product._id}
                            product={product}
                            handleDeleteBtn={handleDeleteBtn}
                        ></ShowMyProduct>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyProducts;