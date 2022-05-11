import React from 'react';

const InfoCard = ({ data }) => {
    return (
        <div className={`card lg:card-side  ${data.bgClass} text-white shadow-xl py-6`}>
            <figure className='pl-6 pt-4'>
                <img src={data.img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.cardTitle}</h2>
                <p>{data.info}.</p>
            </div>
        </div>
    );
};

export default InfoCard;