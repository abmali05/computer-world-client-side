import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Loading from '../Shared/Loading/Loading';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://nameless-reef-39581.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <p className='text-4xl text-center mt-10'>Computer Accessories</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>


                {products.slice(0, 3).map(product => <Product
                    key={product._id}
                    product={product}></Product>)
                }

            </div>
        </>
    );
};

export default Products;