import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpened, setIsOpened } from '../slices/DrawerSlice';

const Drawer = () => {

    const isOpened = useSelector(selectIsOpened);
    const dispatch = useDispatch();
    const scroll = (id: string) => {
        let el: HTMLElement = document.getElementById(id)!;
        scrollTo({
            behavior: "smooth",
            top: el.offsetTop,
            left: el.offsetLeft
        })
        setTimeout(() => {
            dispatch(setIsOpened(false));
        }, 1000);
    }
    return <div className={`fixed z-50 
  ${isOpened ? 'translate-x-0' : 'translate-x-full'}
  duration-700 top-0 w-[300px] right-0 bg-black-faded h-[100%] `}>
        {/* Drawer Content */}
        <div className='p-10 space-y-14 top-0 right-2 fixed'>
            <div className='flex w-full top-0 right-0 
     justify-between items-center'>
                <p className={`font-montserrat font-bold delay-300
       ${isOpened && 'animate-slideRight'}
       text-sm text-green-600 uppercase`}>Navigation</p>
                <div
                    onClick={() => {
                        dispatch(setIsOpened(false));
                    }}
                    className='p-2 cursor-pointer text-white'>
                    <AiOutlineClose className='' />
                </div>
            </div>
            <div className={`delay-300 ${isOpened && 'animate-slideRight'}
     flex flex-col space-y-3 items-start justify-between`}>
                <p onClick={() => scroll('home')} className='text-white text-xl cursor-pointer font-bold'>Home</p>
                <p onClick={() => scroll('about')} className='text-white text-xl cursor-pointer font-bold'>About</p>
                <p onClick={() => scroll('services')} className='text-white text-xl cursor-pointer font-bold'>Services</p>
                <p onClick={() => scroll('works')} className='text-white text-xl cursor-pointer font-bold'>Works</p>
                <p onClick={() => scroll('contact')} className='text-white text-xl cursor-pointer font-bold'>Contact</p>
            </div>
            <p className={`text-gray-600 ${isOpened && 'animate-slideRight'} `}>Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
        </div>
    </div>;
};

export default Drawer;
