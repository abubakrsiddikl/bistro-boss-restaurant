import React from 'react';
import Banner from './Banner';
import Category from './Category';
import CheafTable from './CheafTable';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistros | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <CheafTable></CheafTable>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;