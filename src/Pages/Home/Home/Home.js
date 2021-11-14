import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;