import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return <div className='bg-black-faded'>
        <div className='flex flex-col py-20 items-center justify-between'>
            <div className='max-w-6xl mx-auto grid px-10 sm:grid-cols-1 lg:grid-cols-2 gap-20 justify-start items-start'>
                <div className='flex flex-col flex-1 justify-start items-start space-y-5'>

                    <p className='text-green-600 text-3xl font-bold flex items-center'>Glint<span
                        className='text-green-600'
                    >
                        .
                    </span></p>

                    <p className='text-cgray-light'>
                        Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                    </p>
                </div>
                <div className='flex flex-col flex-1 justify-start items-start space-y-3'>
                    <h1 className='capitalize text-white font-semibold'>get notified</h1>
                    <p className='text-cgray-light'>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>

                    <div className='relative w-full bg-black-dark bg-opacity-20
                flex items-center'>
                        <div className='p-2 flex flex-1 px-4 items-center'>
                            <AiOutlineMail className='h-8 w-8 text-white' />
                            <input className='border-none flex-1 outline-none ring-0 px-6
                    bg-transparent
                    text-white' placeholder='Email Address' type="text" name="" id="" />
                        </div>
                        <div className='bg-green-500 h-16 flex items-center px-8 text-white'>
                            <p className='uppercase font-montserrat text-sm tracking-widest font-semibold'>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex pt-24 text-cgray-light space-x-3 items-center'>
                <p>© Copyright Glint 2022</p>
                <div className='bg-gray-600 h-[20px] w-[0.5px]'></div>
                <p>Buit with <a href='https://nextjs.org/' target={"_blank"} className='text-white cursor-pointer hover:text-green-500 transition-all duration-800'>Next.js</a> and
                    <a target={"_blank"} href='https://tailwindcss.com/'
                        className='text-white hover:text-green-500 transition-all duration-800 cursor-pointer'> Tailwind</a>
                </p>
            </div>
        </div>
    </div>;
};

export default Footer;
