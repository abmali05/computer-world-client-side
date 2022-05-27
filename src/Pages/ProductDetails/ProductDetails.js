import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ProductDetails = () => {

    const [user] = useAuthState(auth);

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        // const url = `http://localhost:5000/products/${productId}`;
        const url = `https://nameless-reef-39581.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false);
            });


    }, [product, productId]);

    if (loading) {
        return <Loading></Loading>
    }



    const restock = (event) => {
        event.preventDefault();
        const usermail = user.email;
        const addQuantity = event.target.quantity.value;

        if (addQuantity <= 0 || addQuantity == null || addQuantity == undefined) {
            return (alert('Please insert a value greater than 0'));
        }

        const quantityInt = parseInt(addQuantity);

        // const CurrentQuantity = quantityInt + parseInt(product.quantity);
        // const newobject = { ...product, quantity: CurrentQuantity }

        const newQuantity = {
            quantity: parseInt(product.quantity) - quantityInt,
            email: usermail,
        };

        const url = `https://nameless-reef-39581.herokuapp.com/products/${productId}`;

        console.log(product.quantity);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setProduct(data));
        // event.target.reset();
        toast.success('Order Successfull');
        const status = "Unpaid";

        const doctor = {
            name: product.name,
            email: user.email,
            price: event.target.price.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
            status: status,


        }
        // send to your database 
        fetch('https://nameless-reef-39581.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    // toast.success('Doctor added successfully')

                }
                else {
                    toast.error('Failed to add the doctor');
                }
                event.target.reset();
            })


    }




    const numberOne = () => {
        const caseInput = document.getElementById('num');
        const QInput = document.getElementById('Qnum');
        const number = parseInt(caseInput.value);
        const price = parseInt(product.price);
        console.log(product.quantity);


        if (number >= (parseInt(product.quantity))) {
            toast.error('You can not buy more than quantity');
            return;
        }

        const increase = number + 1;
        caseInput.value = increase;
        const total = price * increase;
        QInput.value = total;

    }

    const numberTwo = () => {
        const caseInput = document.getElementById('num');
        const QInput = document.getElementById('Qnum');
        const number = parseInt(caseInput.value);
        const price = parseInt(product.price);
        console.log(product.quantity);


        if (number <= 10) {
            toast.error('Minimum order is 10');
            return;
        }

        const increase = number - 1;
        caseInput.value = increase;
        const total = price * increase;
        QInput.value = total;

    }


    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl w-3/4  mx-auto mt-10">
                <figure><img src={product.img} alt="Album" className='w-96' /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.desc}</p>
                    <p><b>Quantity: {product.quantity < 10 ? `${product.quantity} (Below order)` : product.quantity}</b></p>
                    <p><b>Unit Price: {product.price}</b></p>
                    <div className='d-flex'>
                        <button onClick={numberTwo} className="btn btn-primary mr-3 btn-sm">-</button>
                        <button onClick={numberOne} className="btn btn-primary btn-sm">+</button>

                    </div>
                    <form onSubmit={restock}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input id="num" name='quantity' readOnly type="number" min="0" className="input input-bordered w-xs" defaultValue="10" />


                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input defaultValue={product.price * 10} type="number" name='price' id='Qnum' readOnly className="input input-bordered w-xs" />

                            {/* <input type="text" name="price" className="form-control" placeholder='Price' required /> */}


                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input name='address' required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input name='phone' required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="card-actions">
                            <button disabled={product.quantity < 10 ? true : false} className="btn btn-primary mt-3">Place Order</button>
                        </div>
                    </form>


                </div>

            </div>

        </>
    );
};

export default ProductDetails;