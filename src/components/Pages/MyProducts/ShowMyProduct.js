import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ShowMyProduct = ({ product, handleDeleteBtn }) => {

    const { id } = product;
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
                <td>{product?.price}</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <p>{product?.quantity}</p>
                    </div>
                </td>
                <td className='d-none d-md-block'>{product?.supplierName}</td>
                <td>
                    <button
                        onClick={() => handleDeleteBtn(id)}
                        className='btn btn-link'><AiFillDelete className='text-danger'></AiFillDelete></button>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowMyProduct;