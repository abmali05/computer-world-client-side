import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const [myproduct, setMyproduct] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);


    const navigate = useNavigate()

    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        console.log(email);
        const url = `https://dry-forest-86287.herokuapp.com/myorder?email=${email}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('tokenAccess')}`
            },

        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('tokenAccess');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setMyproduct(data);
                console.log(data);
                setLoading(false)
            });
    }, [user, order]);

    if (loading) {
        return <Loading></Loading>
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
                    const updateOrder = order.filter(order => order._id !== productId);
                    console.log(updateOrder);
                    setOrder(updateOrder);
                    toast('Product Deleted Successfully');
                })
        }
    }


    return (
        <div className='mt-10'>
            MyOrders: {myproduct.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproduct.map((myproduct, index) =>

                                <tr key={myproduct._id}>
                                    <th>{index + 1}</th>
                                    <td>{myproduct.name}</td>
                                    <td>{myproduct.price}</td>
                                    <td>{myproduct.status}</td>
                                    <td>  <button className='btn btn-xs btn-primary' disabled={((myproduct.status === "Pending") || (myproduct.status === "Shipped")) ? true : false}
                                        onClick={() => deleteItem(myproduct._id)}
                                    >Delete</button>
                                    </td>

                                    <td>


                                        <Link to={`/dashboard/payment/${myproduct._id}`}><button disabled={myproduct.status === "Unpaid" ? false : true} className='btn btn-xs btn-success'>pay</button></Link>

                                    </td>
                                </tr>

                            )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;