import React from 'react';
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winston Harry',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore animi praesentium similique eius dolore maxime, neque deleniti, numquam, commodi velit voluptate itaque at nihil excepturi.',
            location: 'California',
            img: person1

        },
        {
            _id: 2,
            name: 'Natalia Hall',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore animi praesentium similique eius dolore maxime, neque deleniti, numquam, commodi velit voluptate itaque at nihil excepturi.',
            location: 'California',
            img: person2
        },
        {
            _id: 3,
            name: 'Gemma James',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore animi praesentium similique eius dolore maxime, neque deleniti, numquam, commodi velit voluptate itaque at nihil excepturi.',
            location: 'California',
            img: person3
        }
    ]
    return (
        <section className='m-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="quote" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review
                    key={review._id}
                    review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;