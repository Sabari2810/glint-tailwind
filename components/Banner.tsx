import React from 'react';
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Banner = () => {
    return <div className='py-14 flex font-montserrat items-center justify-between'>
        <div className='sm:max-w-4xl md:max-w-6xl flex flex-col items-start mt-14 
        px-7 sm:px-9 md:px-24 lg:px-48'>
            <p className='text-gray-500 
            uppercase tracking-widest px-2 mb-1 font-semibold'>Welcome to Glint</p>
            <h3 className='text-white mobile:leading-normal sm:leading-snug
             lg:leading-normal
            text-4xl lg:text-6xl font-bold'>
                We are a creative group
                of people who design
                influential brands and
                digital experiences.

            </h3>
            <div className='mt-10 sm:mt-16 flex flex-col md:flex md:flex-row items-center md:space-y-0 md:space-x-8 space-y-6'>
                <button className='banner-btn'>Start a project</button>
                <button className='banner-btn'>More about us</button>
            </div>
        </div>
        <div className='mobile:flex pr-4 sm:px-10 hidden flex-col space-y-4 text-white'>
            <div className='banner-icon'>
                <FaFacebookF />
            </div>
            <div className='banner-icon'>
                <FaTwitter />
            </div>
            <div className='banner-icon'>
                <FaInstagram />
            </div>
            <div className='banner-icon'>
                <FaBehance />
            </div>
            <div className='banner-icon'>
                <FaDribbble />
            </div>
        </div>
    </div >;
};

export default Banner;
