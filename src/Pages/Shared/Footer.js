import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const date = new Date();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'contain'
        }} className="p-16">
            <div className='footer'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <div className="link link-hover">Emergency Checkup</div>
                    <div className="link link-hover">Monthly Checkup</div>
                    <div className="link link-hover">Weekly Checkup</div>
                    <div className="link link-hover">Deep Checkup</div>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <div className="link link-hover">Fluoride Treatment</div>
                    <div className="link link-hover">Cavity Filling</div>
                    <div className="link link-hover">Teath Whitening</div>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <div className="link link-hover">New York - 101010 Hudson</div>
                </div>
            </div>
            <footer className="text-center my-10 lg:pt-12">
                <div>
                    <p>Copyright © {date.getFullYear()} - All rights reserved.</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;