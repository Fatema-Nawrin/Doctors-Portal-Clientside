import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const date = new Date();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-16">
            <div className='footer'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <footer className="text-center my-10 lg:pt-12">
                <div>
                    <p>Copyright © {date.getFullYear()} - All right reserved.</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;