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


    return (
        <div className='m-4'>
            <div className='d-flex justify-content-between align-items-center m-2' >
                <h4 className='ms-4'>Product List</h4>
                <button
                    onClick={handleAddProduct}
                    className='manage-btn'><AiOutlinePlus></AiOutlinePlus> Add Product</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Action</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    products.map(product => <ShowAllProducts
                        key={product?._id}
                        product={product}
                    ></ShowAllProducts>)
                }
            </table>
        </div>
    );
};

export default Inventory;