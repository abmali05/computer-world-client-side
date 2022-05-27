import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, desc, price, quantity, img } = product;

    const pageNavigate = useNavigate();

    const productDetails = id => {
        pageNavigate(`/products/${id}`);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> {(desc.length > 55 ? desc.substring(0, 55) + " ..." : desc)}</p>
                <p><b>Price: ${price}</b></p>
                <p><b>Quantity: {product.quantity < 10 ? `${product.quantity} (Below order)` : product.quantity}</b></p>

                <div className="card-actions justify-end">
                    <button disabled={product.quantity < 10 ? true : false} onClick={() => productDetails(_id)} className="btn btn-primary" type="button">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;