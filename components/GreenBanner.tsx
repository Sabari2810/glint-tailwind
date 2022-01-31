import React, { useEffect, useState } from 'react';

const AWARDS: number = 127;
const CUPS: number = 1505;
const PROJECTS: number = 109;
const CLIENTS: number = 102;

const GreenBanner = () => {
    const [awards, setAwards] = useState(0);
    const [cups, setCups] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);

    const [isGbHeaderInViewport, setIsGbHeaderInViewport] = useState(false);
    const [isGbDescrInViewport, setIsGbDescrInViewport] = useState(false);
    const [isGbStatsInViewport, setIsGbStatsInViewport] = useState(false);


    useEffect(() => {
        function increaseAwards(counter: number) {
            if (counter <= AWARDS) {
                setTimeout(() => {
                    setAwards(counter);
                    increaseAwards(counter + 2);
                }, 20);
            }
        }
        function increaseCups(counter: number) {
            if (counter <= CUPS) {
                setTimeout(() => {
                    setCups(counter);
                    increaseCups(counter + 8);
                }, 10);
            }
        }
        function increaseProjects(counter: number) {
            if (counter <= PROJECTS) {
                setTimeout(() => {
                    setProjects(counter);
                    increaseProjects(counter + 1);
                }, 20);
            }
        }
        function increaseClients(counter: number) {
            if (counter <= CLIENTS) {
                setTimeout(() => {
                    setClients(counter);
                    increaseClients(counter + 1);
                }, 20);
            }
        }
        function increment() {
            increaseAwards(0);
            increaseCups(0);
            increaseProjects(0);
            increaseClients(0);
        }
        return increment();
    }, []);

    useEffect(() => {
        let el: any = document.getElementById("greenBanner");
        document.addEventListener('scroll', function () {
            let gbHeader: HTMLElement = document.getElementById('gbheader')!;
            var gbHeaderBounding = gbHeader.getBoundingClientRect();

            if (gbHeaderBounding.top >= - gbHeader.offsetHeight
                && gbHeaderBounding.left >= - gbHeader.offsetWidth
                && gbHeaderBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + gbHeader.offsetWidth
                && gbHeaderBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + gbHeader.offsetHeight) {
                setIsGbHeaderInViewport(true);
            }
            let gbDescr: HTMLElement = document.getElementById('gbDescr')!;
            var gbDescrBounding = gbDescr.getBoundingClientRect();
            if (gbDescrBounding.top >= - gbDescr.offsetHeight
                && gbDescrBounding.left >= - gbDescr.offsetWidth
                && gbDescrBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + gbDescr.offsetWidth
                && gbDescrBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + gbDescr.offsetHeight) {
                setIsGbDescrInViewport(true);
            }
            let gbStats: HTMLElement = document.getElementById('gbStats')!;
            var gbStatsBounding = gbStats.getBoundingClientRect();
            if (gbStatsBounding.top >= - gbStats.offsetHeight
                && gbStatsBounding.left >= - gbStats.offsetWidth
                && gbStatsBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + gbStats.offsetWidth
                && gbStatsBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + gbStats.offsetHeight) {
                setIsGbStatsInViewport(true);
            }
        });
    }, []);

    return <div id='about' className='from-green-500 relative to-green-600 
     bg-gradient-to-b'>
        <div id='greenBanner' className={`flex py-20 flex-col items-center`} >
            <div id='gbheader' className={`flex-col items-center ${isGbHeaderInViewport && 'animate-slideUp duration-1000 flex'}`}>
                <h1 className='uppercase text-black-dark font-bold tracking-widest'>Hello There</h1>
                <div className=''>
                    <h3 className='px-10 text-white text-5xl md:text-7xl font-semibold'>We Are Glint</h3>
                    <hr className='my-7 border-y-1 border-green-400 w-full' />
                </div>
            </div>
            <p id='gbDescr' className={`max-w-4xl px-8 sm:px-20 lg:px-0 font-serif text-black-dark opacity-95 font-thin text-center ${isGbDescrInViewport && 'animate-slideUp duration-1000'}
         leading-relaxed text-lg sm:text-2xl`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
            <div id='gbStats' className={`py-16 grid gap-6 sm:grid-cols-2 sm:space-x-4 lg:space-x-0 lg:grid-cols-4 items-center ${isGbStatsInViewport && 'animate-slideUp duration-1000'}`}>
                <div className='flex flex-col items-center px-14 sm:mb-8 lg:mb-0 sm:border-r space-y-4 border-green-400 pb-2'>
                    <p className='text-7xl text-white font-bold duration-100 transition-all'>{
                        awards
                    }</p>
                    <p className='text-xl font-bold capitalize'>Awards Received</p>
                </div>
                <hr className='sm:hidden w-full max-w-[16rem] mx-auto border-green-500' />
                <div className='flex flex-col items-center px-14 sm:mb-8 lg:mb-0 lg:border-r space-y-4 border-green-400 pb-2'>
                    <p className='text-7xl font-sans text-white font-bold'>{cups}</p>
                    <p className='text-xl font-bold capitalize'>cups of coffee</p>
                </div>
                <hr className='sm:hidden w-full max-w-[16rem] mx-auto border-green-500' />
                <div className='flex flex-col items-center px-14 sm:border-r space-y-4 sm:border-green-400 pb-2'>
                    <p className='text-7xl text-white font-bold'>{projects}</p>
                    <p className='text-xl font-bold capitalize'>projects completed</p>
                </div>
                <hr className='sm:hidden w-full max-w-[16rem] mx-auto border-green-500' />
                <div className='flex flex-col items-center px-14 sm:border-white space-y-4 pb-2'>
                    <p className='text-7xl text-white font-bold'>{clients}</p>
                    <p className='text-xl font-bold capitalize'>happy clients</p>
                </div>
            </div>
        </div>
        <div className='absolute h-28 right-20 top-0 border border-white'>
        </div>
    </div>;
};

export default GreenBanner;
