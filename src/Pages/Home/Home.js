import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import HomeAppointment from './HomeAppointment';
import Information from './Information';
import SecondBanner from './SecondBanner';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <SecondBanner></SecondBanner>
            <HomeAppointment ></HomeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;