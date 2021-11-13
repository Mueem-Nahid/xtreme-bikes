import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;