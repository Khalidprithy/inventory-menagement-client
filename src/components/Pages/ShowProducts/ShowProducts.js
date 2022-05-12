import React from 'react';
import './ShowProduct.css'
import { AiFillDelete, AiFillEdit, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';

const ShowProducts = ({ product }) => {
    console.log(product);
    // const { _id } = product;
    return (
        <tbody>
            <tr>
                <td><img className='row-img' src={product?.picture} alt="" /></td>
                <td>
                    <div className='container'>
                        <p className='m-0'>{product?.name}</p>
                        <p className='description'>{product?.description}</p>
                    </div>
                </td>
                <td>{product?.price}</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <p>{product?.quantitiy}</p>
                        <button className='btn btn-link p-0'><AiOutlinePlusSquare className='text-dark mb-3 '></AiOutlinePlusSquare> </button>
                        <button className='btn btn-link p-0'><AiOutlineMinusSquare className='text-dark mb-3'></AiOutlineMinusSquare> </button>
                    </div>
                </td>
                <td>{product?.supplierName}</td>
                <td>
                    <div>
                        <button className='btn btn-link p-0'><AiFillDelete className='text-danger me-2'></AiFillDelete></button>
                        <button className='btn btn-link p-0'><AiFillEdit className='text-primary me-2'></AiFillEdit></button>
                        <button className='btn btn-link p-0'><BiShowAlt className='text-success'></BiShowAlt></button>

                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowProducts;