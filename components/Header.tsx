import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
    return <div className='flex bg-transparent items-center justify-between p-8'>
        <p className='text-white text-3xl font-bold flex items-center'>Glint<span
            className='text-green-600'
        >
            .
        </span></p>
        <div className='cursor-pointer group  flex items-center space-x-2 fixed top-8 right-8'>
            <p className='uppercase group-hover:text-white  transition-all duration-500 font-mono tracking-[0.2rem] text-green-600 font-bold'>menu</p>
            <MenuIcon className='h-8 w-8 text-white' />
        </div>
    </div>;
};

export default Header;
