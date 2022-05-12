import React from 'react';
import './AddItem.css'

const AddItem = () => {
    return (
        <div className='container my-4 text-center'>
            <h4>Add a new product</h4>
            <form>
                <div className='d-flex flex-column w-50 mx-auto'>
                    <input className='mb-2' type="text" name='name' placeholder='Name' />
                    <input className='mb-2' type="text" name='supplierName' placeholder='Supplier Name' />
                    <input className='mb-2' type="number" name="price" placeholder='Price' />
                    <input className='mb-2' type="number" name="quantity" placeholder='Quantity' />
                    <input className='mb-2' type="text" name='imgURL' placeholder='Image URL' />
                    <textarea className='mb-2' name="description" cols="10" rows="3" placeholder='Description'></textarea>
                    <input className='add-btn add-btn-hover' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;