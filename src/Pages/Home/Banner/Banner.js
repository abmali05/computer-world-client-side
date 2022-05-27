import React from 'react';
import img from './banner0.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${img})`

        }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Everyone!</h1>
                    <p className="mb-5">Welcome to Computer World</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;