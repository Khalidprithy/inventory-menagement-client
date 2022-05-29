import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ShowAllProducts from '../ShowAllProduct/ShowAllProduct';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {

    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/additem')
    }

    const [products, setProducts] = useProducts();

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className='m-4'>
            <div className='d-flex justify-content-between align-items-center m-2' >
                <h4 className='ms-4'>Product List</h4>
                <button
                    onClick={handleAddProduct}
                    className='manage-btn'><AiOutlinePlus></AiOutlinePlus> Add Product</button>
            </div>
            <table className="table">
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
                    products.map(product => <ShowAllProducts
                        key={product?._id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ShowAllProducts>)
                }
            </table>
        </div>
    );
};

export default Inventory;