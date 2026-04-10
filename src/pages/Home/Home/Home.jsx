import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../../shared/Contact/Contact';
import BannerItems from '../Banner/BannerItems.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;