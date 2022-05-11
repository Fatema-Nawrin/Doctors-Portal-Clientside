import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div className='px-12'>
            <div className="hero min-h-screen lg:bg-[url('assets/images/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm md:max-w-md lg:max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div className='lg:pr-6'>
                        <h1 className="text-4xl lg:text-5xl pt-6 lg:pt-0 font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;