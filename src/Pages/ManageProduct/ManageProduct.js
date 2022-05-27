import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const ManageProduct = () => {

    const [product, setProduct] = useState([]);


    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://nameless-reef-39581.herokuapp.com/products', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('tokenAccess')}`
        }
    }).then(res => res.json()));
    refetch();

    if (isLoading) {
        return <Loading></Loading>
    }


    const deleteItem = productId => {
        const confirmDelete = window.confirm("Are you sure to delete?");
        if (confirmDelete) {
            const url = `https://nameless-reef-39581.herokuapp.com/products/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const updateProduct = products.filter(product => product._id !== productId);
                    console.log(updateProduct);
                    setProduct(updateProduct);
                    toast('Product Deleted Successfully');

                })
        }
    }


    return (
        <div className='mt-10'>
            Total Products: {products.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((products, index) =>

                                <tr key={products._id}>
                                    <th>{index + 1}</th>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
                                    <td>{products.quantity}</td>

                                    <button className='btn btn-outline-danger' onClick={() => deleteItem(products._id)}><i className="bi bi-trash"></i> Delete</button>

                                </tr>

                            )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;