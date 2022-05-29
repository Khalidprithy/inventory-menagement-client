import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EditProduct.css'
import { AiFillEdit } from 'react-icons/ai';
import toast from 'react-hot-toast';

const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://protected-journey-17273.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const handleRestock = event => {
        event.preventDefault()
        const quantity = product.quantity;
        const inputQuantity = event.target.newQuantity.value;
        if (inputQuantity < 1) {
            toast.error('Please Enter a positive number')
            return;
        }
        else {
            const updatedQuantity = JSON.parse(quantity) + JSON.parse(inputQuantity);

            const updatedProduct = {
                name: product.name,
                price: product.price,
                quantity: (updatedQuantity).toString(),
                supplierName: product.supplierName,
                description: product.description,
                picture: product.picture
            }
            setProduct(updatedProduct)
            const url = `https://protected-journey-17273.herokuapp.com/products/${id}`;
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
                    toast.success('Product Updated');
                    event.target.reset();
                })
        }
    }
    const handleDelivered = async event => {
        event.preventDefault()
        const quantity = product.quantity;
        const updatedQuantity = JSON.parse(quantity) - 1;
        const updatedProduct = {
            name: product.name,
            price: product.price,
            quantity: (updatedQuantity).toString(),
            supplierName: product.supplierName,
            description: product.description,
            picture: product.picture
        }
        setProduct(updatedProduct);
        const url = `https://protected-journey-17273.herokuapp.com/products/${id}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product Delivered')
            })
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
                                onClick={handleDelivered}
                                className='btn-style'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;