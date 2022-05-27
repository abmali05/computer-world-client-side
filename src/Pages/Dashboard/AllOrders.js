import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AllOrders = () => {


    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://dry-forest-86287.herokuapp.com/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('tokenAccess')}`
        }
    }).then(res => res.json()));
    refetch();

    if (isLoading) {
        return <Loading></Loading>
    }

    const Shipped = (_id) => {

        const status = "Shipped";
        const shipment = {
            status: status,
        }

        fetch(`https://dry-forest-86287.herokuapp.com/order/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(shipment)
        }).then(res => res.json())
            .then(data => {
                // setProcessing(false);
                console.log(data);
            })

    }


    const deleteItem = productId => {
        const confirmDelete = window.confirm("Are you sure to delete?");
        if (confirmDelete) {
            const url = `https://dry-forest-86287.herokuapp.com/orders/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const updateOrder = orders.filter(order => order._id !== productId);
                    console.log(updateOrder);
                    // setOrder(updateOrder);
                    toast('Product Deleted Successfully');
                })
        }
    }


    return (
        <div className='mt-10'>
            All Orders: {orders.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((myproduct, index) =>

                                <tr key={myproduct._id}>
                                    <th>{index + 1}</th>
                                    <td>{myproduct.name}</td>
                                    <td>{myproduct.price}</td>
                                    <td>{myproduct.status}</td>
                                    <td>  <button className='btn btn-xs btn-primary' disabled={((myproduct.status === "Shipped") || (myproduct.status === "Unpaid")) ? true : false}
                                        onClick={() => Shipped(myproduct._id)}
                                    >Delivered</button>
                                    </td>
                                    <td>  <button className='btn btn-xs btn-primary' disabled={((myproduct.status === "Shipped") || (myproduct.status === "Pending")) ? true : false}
                                        onClick={() => deleteItem(myproduct._id)}
                                    >Delete</button>
                                    </td>

                                </tr>

                            )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;