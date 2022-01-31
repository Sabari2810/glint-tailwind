import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { setIsOpened } from '../slices/DrawerSlice';

const Header = () => {
    const dispatch = useDispatch();
    return <div className='flex bg-transparent items-center justify-between px-10 pt-6'>
        <p className='text-white text-3xl font-bold flex items-center'>Glint<span
            className='text-green-600'
        >
            .
        </span></p>
        <div
            id='menu'
            onClick={() => {
                dispatch(setIsOpened(true));
            }
            }
            className='cursor-pointer z-50 bg-black-dark p-2 group flex items-center sm:space-x-2
         fixed top-6 right-10'>
            <p className='uppercase group-hover:text-white text-xs
             transition-all duration-500 tracking-[0.2rem] 
             text-green-600 hidden sm:inline-block font-montserrat font-bold'>menu</p>
            <MenuIcon className='h-8 w-8 text-white' />
        </div>
    </div>;
};

export default Header;
