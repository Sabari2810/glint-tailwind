import React from 'react';
import { FaArrowDown, FaBehance, FaChevronDown, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Banner = () => {
    return <div id='home' className='py-12 relative bg-transparent flex font-montserrat items-center 
    justify-between'>
        <div className='sm:max-w-lg animate-slideUp md:max-w-xl lg:max-w-6xl flex
         flex-col items-center sm:items-start bg-transparent pt-28
        sm:pl-7 sm:pl-9 md:pl-24 lg:px-48'>
            <p className='text-gray-500 
            uppercase tracking-widest bg-transparent px-2 py-2 font-semibold'>Welcome to Glint</p>
            <h3 className='text-white py-3 mobile:leading-normal sm:leading-snug
             lg:leading-normal
            text-4xl lg:text-6xl font-bold text-center sm:text-left'>
                We are a creative group
                of people who design
                influential brands and
                digital experiences.

            </h3>
            <div className='flex w-full lg:mt-14 mt-8 bg-transparent pb-24 
            flex-col md:flex md:flex-row items-center
             md:space-y-0 md:space-x-8 space-y-6'>
                <button className='banner-btn'>Start a project</button>
                <button className='banner-btn'>More about us</button>
            </div>
        </div>
        <div className='mobile:flex pr-4 sm:px-10 hidden justify-end items-end flex-col space-y-4 text-white'>
            <div className='flex items-center group space-x-2'>
                <p className='text-green-500 text-xs hidden group-hover:animate-zoomIn group-hover:lg:block'>Facebook</p>
                <div className='banner-icon cursor-pointer'>
                    <FaFacebookF />
                </div>
            </div>
            <div className='flex items-center group space-x-2 justify-end'>
                <p className='text-green-500 hidden text-xs group-hover:animate-zoomIn group-hover:lg:block'>Twitter</p>
                <div className='banner-icon cursor-pointer'>
                    <FaTwitter />
                </div>
            </div>
            <div className='flex items-center group space-x-2 justify-end'>
                <p className='text-green-500 hidden text-xs group-hover:animate-zoomIn group-hover:lg:block'>Instagram</p>
                <div className='banner-icon cursor-pointer'>
                    <FaInstagram />
                </div>
            </div>
            <div className='flex items-center group space-x-2 justify-end'>
                <p className='text-green-500 hidden text-xs group-hover:animate-zoomIn group-hover:lg:block'>Behance</p>
                <div className='banner-icon cursor-pointer'>
                    <FaBehance />
                </div>
            </div>
            <div className='flex items-center group space-x-2 justify-end'>
                <p className='text-green-500 hidden text-xs group-hover:animate-zoomIn group-hover:block'>Dribble</p>
                <div className='banner-icon cursor-pointer'>
                    <FaDribbble />
                </div>
            </div>
        </div>
        <div className='absolute h-20 sm:h-28 right-20 bottom-0 border border-green-500'>
            <div className='relative'>
                <div className='absolute w-[180px] right-0 top-0 text-white'>
                    <div
                        onClick={() => {
                            let ele: HTMLElement = document.getElementById("about")!;
                            scrollTo({
                                behavior: "smooth",
                                left: ele.offsetLeft,
                                top: ele.offsetTop
                            });
                        }}
                        className='flex items-center text-green-500 cursor-pointer space-x-4'>
                        <FaChevronDown />
                        <p className='font-montserrat text-[0.65rem] w-fit font-bold tracking-[0.25rem] text-white'>Scroll Down</p>
                    </div>
                </div>
            </div>
        </div>
    </div >;
};

export default Banner;
