import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Information = () => {
    const datas = [
        {
            id: 1,
            cardTitle: 'Opening Hours',
            img: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            info: '9am to 2pm and 4pm to 9pm'
        },
        {
            id: 2,
            cardTitle: 'Visit our location',
            img: marker,
            bgClass: 'bg-accent',
            info: 'Brooklyn, NY 10036, United States'
        }, {
            id: 3,
            cardTitle: 'Contact us now',
            img: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            info: '+000 123 456789'

        },]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
            {
                datas.map(data =>
                    <InfoCard
                        key={data.id}
                        data={data}
                    ></InfoCard>)
            }
            {/* <InfoCard cardTitle='Opening Hours' img={clock} bgclassName='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard cardTitle='Visit our location' bgclassName="bg-accent" img={marker}></InfoCard>
            <InfoCard bgclassName='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' img={phone}></InfoCard> */}

        </div>
    );
};

export default Information;