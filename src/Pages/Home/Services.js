import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [{
        id: 1,
        name: 'Fluoride Treatment',
        description: "It contains a a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
        img: fluoride

    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: "The dentist will fill the opening in your tooth with some kind of material.",
        img: cavity

    }, {
        id: 3,
        name: 'Teeth Whitening',
        description: "It is the process of lightening the color of your teeth.",
        img: whitening

    }]
    return (
        <div className='px-12'>
            <div className='text-center my-14 lg:my-28'>
                <h3 className='uppercase font-bold  text-secondary text-xl'>Our services</h3>
                <h3 className=' text-3xl md:text-4xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{
                services.map(service =>
                    <Service key={service.id}
                        service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;