import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const Gallery = () => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [prevWidth, setprevWidth] = useState(0);

    const [triggerAnimate, setTriggerAnimate] = useState(false);

    const [isWorksPicsInViewport, setIsWorksPicsInViewport] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', function () {
            let worksPics: HTMLElement = document.getElementById('worksPics')!;
            var worksPicsBounding = worksPics.getBoundingClientRect();

            if (worksPicsBounding.top >= - worksPics.offsetHeight
                && worksPicsBounding.left >= - worksPics.offsetWidth
                && worksPicsBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + worksPics.offsetWidth
                && worksPicsBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + worksPics.offsetHeight) {
                setIsWorksPicsInViewport(true);
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setprevWidth(windowWidth);
            setWindowWidth(window.innerWidth);
            setTriggerAnimate(true);
            setTimeout(() => {
                if (prevWidth == windowWidth) {
                    setTriggerAnimate(false);
                }
            }, 200);
        });
    }, []);


    return <div className='bg-white h-full flex items-center w-full'>
        <div id='worksPics' className={`mt-[-100px] ${isWorksPicsInViewport && "animate-slideUp duration-1000"} max-w-6xl pb-32 mx-auto`}>
            <div className='grid grid-cols-1 px-11 md:grid-cols-2'>
                <div className={`relative duration-700 
                overflow-hidden cursor-pointer group`}>
                    <img className='group-hover:scale-110 h-[300px] sm:h-[600px] w-full object-cover transition duration-700 ' src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-shutterbug.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>

                </div>
                <div className='relative transition duration-300 
                overflow-hidden cursor-pointer group'>
                    <img className={`group-hover:scale-110 h-[300px] sm:h-[600px] object-cover
                     transition duration-700 `}
                        src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-woodcraft.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>
                </div>
                <div className='relative transition duration-300 overflow-hidden cursor-pointer group'>
                    <img className='group-hover:scale-110 h-[300px] sm:h-[600px] object-cover transition duration-700 ' src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-beetle.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>
                </div>
                <div className='relative transition duration-300 overflow-hidden cursor-pointer group'>
                    <img className='group-hover:scale-110 h-[300px] sm:h-[600px] object-cover transition duration-700 ' src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-grow-green.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>
                </div>
                <div className='relative transition duration-300 overflow-hidden cursor-pointer group'>
                    <img className='group-hover:scale-110 h-[300px] sm:h-[600px] object-cover transition duration-700 ' src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-guitarist.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>
                </div>
                <div className='relative transition duration-300 overflow-hidden cursor-pointer group'>
                    <img className='group-hover:scale-110 h-[300px] sm:h-[600px] object-cover transition duration-700 ' src="https://preview.colorlib.com/theme/glint/images/portfolio/gallery/g-palmeira.jpg.webp" alt="" />
                    <div className='hidden bg-black-dark bg-opacity-75 duration-700
                    transition-all flex-col justify-between p-8
                     absolute text-white top-0 right-0 w-full
                      group-hover:flex
                       h-full
                   '>
                        <div className='p-3 relative animate-slideDown rounded-full w-fit border border-white'>
                            <FaLink className='h-4 w-4' />
                            <div className='absolute flex items-center w-full
                             top-0 mx-auto ml-1.5 mt-[-48px]'>

                                <div className='h-12
                                bg-slate-600 w-[1px]'></div>
                            </div>
                        </div>
                        <div className='items-center justify-center w-full flex'>
                            <h1 >
                                <FaPlus />
                            </h1>
                        </div>
                        <div className='animate-slideUpLight duration-500'>
                            <h3 className='uppercase font-bold font-montserrat text-lg'>shutter bag</h3>
                            <p className='text-gray-600'>Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Gallery;
