import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <table className="table table-hover">
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
                <tr>
                    <td><img className='row-img' src={product.picture} alt="" /></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.supplierName}</td>
                </tr>
            </table>
        </div>
    );
};

export default EditProduct;