import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {


    const ProductSubmit = event => {
        event.preventDefault();

        const product = {

            name: event.target.name.value,
            desc: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            img: event.target.img.value
        }

        fetch('https://nameless-reef-39581.herokuapp.com/addproduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => data)
        event.target.reset();
        toast('Product Added Successfully');

    }


    return (
        <div className='mx-auto w-96 mt-10'>
            <form onSubmit={ProductSubmit} className=" mx-auto">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />

                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name='price' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input name='quantity' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input name='img' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    <button className="btn btn-xs mt-5 sm:btn-sm md:btn-md lg:btn-lg">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;