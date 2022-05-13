import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container my-4 text-center'>
            <h4>Add a new product</h4>
            <form onSubmit={handleSubmit(onSubmit)}
                className='d-flex flex-column w-50 mx-auto'
            >
                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Supplier name' {...register("supplierName")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity", { min: 1, max: 99 })} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("picture")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='add-btn' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddItem;