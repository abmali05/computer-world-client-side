import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2oFNDyTZnPcD0CFngaWWKmOzJPyZznKfi9UcdubEzYlsGboO6yERLYBqXoDGXYeVwtDdLdUKmHQ5qAF3BAGWcz00iszf6Inp');

const Payment = () => {

    const { id } = useParams();

    const url = `https://nameless-reef-39581.herokuapp.com/payment/${id}`;

    const { data: order, isLoading } = useQuery(['payment', id], () => fetch(url,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">{order.name}</p>
                    <h2 class>Quantity: {order.quantity}</h2>

                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;