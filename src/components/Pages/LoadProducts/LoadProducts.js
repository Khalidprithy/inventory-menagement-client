import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ShowProducts from '../ShowProducts/ShowProducts';
import { TiArrowRightThick } from 'react-icons/ti';

const LoadProducts = () => {
    const navigate = useNavigate();

    const handleShowAll = () => {
        navigate('/inventory')
    }

    const [products, setProducts] = useProducts();
    return (
        <div className='border rounded m-2'>
            <div>
                <div className='d-flex justify-content-between align-items-center m-2' >
                    <h4 className='ms-4'>Top Products</h4>
                    <button
                        onClick={handleShowAll}
                        className='btn btn-link'>Show All <TiArrowRightThick></TiArrowRightThick></button>
                </div>
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        products.slice(0, 6).map(product => <ShowProducts
                            key={product?._id}
                            product={product}
                        ></ShowProducts>)
                    }
                </table>
            </div>
        </div>
    );
};

export default LoadProducts;