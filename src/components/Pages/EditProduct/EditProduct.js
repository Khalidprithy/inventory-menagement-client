import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EditProduct.css'
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);



    const handleRestock = event => {
        event.preventDefault()
        const quantity = product.quantity;
        const inputQuantity = event.target.newQuantity.value;
        if (inputQuantity < 1) {
            alert('Please Enter a positive number (1 or 1<)')
            return;
        }
        else {
            const updatedQuantityInt = parseInt(quantity) + parseInt(inputQuantity);

            const updatedQuantity = updatedQuantityInt + '';

            const updatedProduct = { updatedQuantity }
            console.log(updatedProduct)

            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert('Product Updated')
                })
        }
    }



    return (
        <div className='container m-3 mx-auto'>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <h4>Product Details</h4>
                <Link className='btn-style' to='/inventory'>Manage Inventories <AiFillEdit></AiFillEdit> </Link>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p>ID: {product._id}</p>
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>Brand: {product.supplierName}</p>
                            <p>Price: {product.price}</p>

                            <form
                                onSubmit={handleRestock}
                            >
                                <div className='d-flex align-items-center'>
                                    <p>Quantity: {product.quantity} +</p>
                                    <input className='w-25 mb-3 ms-2' type="text" name='newQuantity' />
                                    <input className='btn-style mb-3' type="submit" value="Restock" />
                                </div>
                            </form>
                            <button
                                className='btn-style'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;