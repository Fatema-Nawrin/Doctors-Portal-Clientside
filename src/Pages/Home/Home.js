import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;