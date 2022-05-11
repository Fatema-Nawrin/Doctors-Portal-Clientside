import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import Button from '../Shared/Button';

const HomeAppointment = () => {
    return (
        <section className="flex justify-center items-center bg-[url('assets/images/appointment.png')]">

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 py-12 lg:py-6 px-12 lg:pr-24'>
                <h3 className='text-secondary font-bold text-xl'>Appointment</h3>
                <h2 className='text-3xl text-white pt-4'>Make an appointment Today</h2>
                <p className='py-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eaque ipsam nulla facilis consequuntur iusto. Magni, voluptatem quis? Temporibus alias neque quia deserunt! Fugit, doloremque odit quo quisquam labore aliquid accusamus magni obcaecati ratione voluptatum mollitia harum rerum natus dolorem. Est sed illo similique aliquid?</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default HomeAppointment;