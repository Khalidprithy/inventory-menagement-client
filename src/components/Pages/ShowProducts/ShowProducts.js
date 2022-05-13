import React from 'react';
import './ShowProduct.css'
import { AiFillEdit, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ShowProducts = ({ product }) => {
    const { _id } = product;

    const navigate = useNavigate();

    const handleEditBtn = id => {
        navigate(`/products/${id}`);
    }


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
                    <button
                        onClick={() => handleEditBtn(_id)}
                        className='manage-btn'>Edit <AiFillEdit></AiFillEdit></button>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowProducts;