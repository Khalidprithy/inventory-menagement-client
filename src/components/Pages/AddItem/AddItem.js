import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import './AddItem.css'
import auth from '../../../firebase.init';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = product => {
        console.log(product)
        axios.post(`https://protected-journey-17273.herokuapp.com/products`, product)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Your product added')
                }

            })

        if (loading) {
            return <Loading></Loading>
        }
    };


    return (
        <div className='container my-4 text-center'>
            <h4>Add a new product</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='d-flex flex-column w-50 mx-auto'>
                <input className='mb-3' value={user?.displayName} {...register("name", { required: true })} />
                <input className='mb-3' value={user?.email} {...register("email", { required: true })} />
                <input className='mb-3' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Supplier name' {...register("supplierName")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity", { min: 1, max: 1000 })} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("picture")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='add-btn' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddItem;