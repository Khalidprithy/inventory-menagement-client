import React from 'react';
import './ShowProduct.css'
import { AiFillEdit } from 'react-icons/ai';
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
                <td className='d-none d-md-block'>
                    <div className='container '>
                        <p className='m-0'>{product?.name}</p>
                        <p className='description'>{product?.description}</p>
                    </div>
                </td>
                <td>${product?.price}</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <p>{product?.quantity}</p>
                    </div>
                </td>
                <td className='d-none d-md-block border-bottom-0'>{product?.supplierName}</td>
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