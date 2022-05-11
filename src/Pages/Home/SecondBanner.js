import React from 'react';
import treatment from '../../assets/images/treatment.png'

const SecondBanner = () => {
    return (
        <div className='lg:w-9/12 mx-auto mb-10 px-12'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='treatment' className="max-w-sm md:max-w-md my-8 rounded-lg shadow-2xl" />
                    <div className='lg:pl-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, corporis quo ad sequi, magni beatae facilis reiciendis, et voluptates recusandae quasi quod unde ea dolores pariatur veritatis. Quasi et omnis vitae architecto ipsum facere placeat unde perspiciatis ipsa eaque quidem, non corporis molestias dignissimos? Excepturi animi dolores hic quisquam labore.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;