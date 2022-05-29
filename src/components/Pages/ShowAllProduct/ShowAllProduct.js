import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ShowAllProducts = ({ product, handleDeleteBtn }) => {
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
                    <div className='container'>
                        <p className='m-0'>{product?.name}</p>
                        <p className='description'>{product?.description}</p>
                    </div>
                </td>
                <td>${product?.price}</td>
                <td>
                    <p>{product?.quantity}</p>

                </td>
                <td className='d-none d-md-block border-bottom-0'>
                    <p>{product?.supplierName}</p>
                </td>
                <td>
                    <div className='d-flex'>
                        <button className='btn btn-link p-0'><BiShowAlt
                            onClick={() => handleEditBtn(_id)}
                            className='text-success me-2'></BiShowAlt></button>
                        <button className='btn btn-link p-0'><AiFillEdit
                            onClick={() => handleEditBtn(_id)}
                            className='text-primary me-2'></AiFillEdit></button>
                        <button className='btn btn-link p-0'><AiFillDelete
                            onClick={() => handleDeleteBtn(_id)}
                            className='text-danger me-2'></AiFillDelete></button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowAllProducts;