import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center mt-6'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Review;