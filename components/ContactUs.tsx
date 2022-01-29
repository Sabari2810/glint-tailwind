import React from 'react';
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
    return <div className='bg-contact bg-black-faded bg-opacity-100'>
        <div className='max-w-5xl py-32 mx-auto'>
            <div id='serviceHeader' className={`flex flex-col items-center animate-slideUp duration-1000'}`}>
                <h2 className='sec-header-title'>Contact us</h2>
                <h3 className='sec-header-descr'>Reach out for a new project or just say hello</h3>
            </div>
            <div id='form' className='flex pt-10 h-[800px]'>
                <div className='px-14 flex-1 flex flex-col items-start justify-evenly bg-black-dark bg-opacity-40'>
                    <h3 className='uppercase text-white font-montserrat text-sm tracking-wider font-semibold'>send us a message</h3>
                    <div className='w-full flex flex-col space-y-4 items-start'>
                        <input type="text" placeholder='Your Name' className='cinput' />
                        <input type="text" placeholder='Your Email' className='cinput' />
                        <input type="text" placeholder='Subject' className='cinput' />
                        <textarea rows={8} placeholder='Your Message' className='cinput min-h-[15rem]' />
                    </div>
                    <div className='w-full'>
                        <button className='uppercase font-montserrat text-sm py-5 text-white bg-green-600 w-full'>submit</button>
                    </div>
                </div>
                <div className='flex pl-12 w-[21rem] pr-[5rem] flex-col items-start bg-black-faded justify-evenly'>
                    <h3 className='uppercase text-white font-montserrat text-sm tracking-wider font-semibold'>contact info</h3>
                    <div className='flex space-y-5 flex-col items-start'>
                        <h3 className='text-green-600 font-montserrat text-lg font-semibold'>
                            Where to Find Us
                        </h3>
                        <p className='text-cgray-light leading-relaxed'>
                            1600 Amphitheatre Parkway
                            Mountain View, CA
                            94043 US
                        </p>
                    </div>
                    <div className='flex space-y-5 flex-col items-start'>
                        <h3 className='text-green-600 font-montserrat text-lg font-semibold'>
                            Email Us At
                        </h3>
                        <div className='text-cgray-light'>
                            <p className='pb-2'>
                                contact@glintsite.com
                            </p>
                            <p className=''>
                                info@glintsite.com
                            </p>
                        </div>
                    </div>
                    <div className='flex space-y-5 flex-col items-start'>
                        <h3 className='text-green-600 font-montserrat text-lg font-semibold'>
                            Call Us At
                        </h3>
                        <div className='text-cgray-light'>
                            <p className=' pb-2'>
                                Phone: (+63) 555 1212
                            </p>
                            <p className=' pb-2'>
                                Mobile: (+63) 555 0100
                            </p>
                            <p className=' pb-2'>
                                Fax: (+63) 555 0101
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 text-white'>
                        <FaFacebookF className='h-5 hover:scale-95 transition-all cursor-pointer hover:text-green-600 duration-500' />
                        <FaTwitter className='h-5 hover:scale-95 transition-all cursor-pointer hover:text-green-600 duration-500' />
                        <FaInstagram className='h-5 hover:scale-95 transition-all cursor-pointer hover:text-green-600 duration-500' />
                        <FaBehance className='h-5 hover:scale-95 transition-all cursor-pointer hover:text-green-600 duration-500' />
                        <FaDribbble className='h-5 hover:scale-95 transition-all cursor-pointer hover:text-green-600 duration-500' />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default ContactUs;
