import React from 'react';
import img from './explore.jpg';

const Explore = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Computer World</h1>
                        <p className="py-6">You can find your all computer related equipments from us. We are very much keen to ensure quality and positive customer feedback</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;