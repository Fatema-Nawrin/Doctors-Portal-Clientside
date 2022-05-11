import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">{children}</button>
        </div>
    );
};

export default Button;