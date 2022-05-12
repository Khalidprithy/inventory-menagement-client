import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ShowProducts from '../ShowProducts/ShowProducts';

const Inventory = () => {

    const [products, setProducts] = useProducts();


    return (
        <div className='m-4'>
            <h4>All Products</h4>
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
                    products.map(product => <ShowProducts
                        key={product?._id}
                        product={product}
                    ></ShowProducts>)
                }
            </table>
        </div>
    );
};

export default Inventory;