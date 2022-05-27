import React from 'react';
import Business from '../../Business/Business';
import ContactUs from '../../ContactUs/ContactUs';
import Explore from '../../Explore/Explore';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Review></Review>
            <Explore></Explore>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;