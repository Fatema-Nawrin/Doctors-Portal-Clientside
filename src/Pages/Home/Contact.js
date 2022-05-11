import React from 'react';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <div className="text-center bg-[url('assets/images/appointment.png')] py-16">
            <h3 className='text-secondary font-bold text-xl'>Contact Us</h3>
            <h2 className='text-4xl text-white'>Stay connected with us</h2>
            <form className='mt-4'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-md my-4" />
                <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-md mb-4" />
                <br />
                <textarea className="textarea h-28 w-full max-w-md mb-4" placeholder="Your Message"></textarea>
                <Button>Submit</Button>
                <br />
            </form>
        </div>
    );
};

export default Contact;