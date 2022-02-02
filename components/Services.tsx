import React, { useEffect, useState } from 'react';
import { FaAddressBook, FaBrush, FaMarsStrokeV, FaSpeakerDeck } from 'react-icons/fa';
import { AiFillBuild, AiFillFormatPainter, AiFillMinusCircle, AiFillRocket, AiFillStepBackward, AiOutlineGlobal } from 'react-icons/ai';

const Services = () => {
    const [isServicesHeaderInViewPort, setIsServicesHeaderInViewPort] = useState(false);
    const [isServiceOneInViewPort, setIsServiceOneInViewPort] = useState(false);
    const [isServiceTwoInViewPort, setIsServiceTwoInViewPort] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', function () {
            let serviceHeader: HTMLElement = document.getElementById('serviceHeader')!;
            var serviceHeaderBounding = serviceHeader.getBoundingClientRect();

            if (serviceHeaderBounding.top >= - serviceHeader.offsetHeight
                && serviceHeaderBounding.left >= - serviceHeader.offsetWidth
                && serviceHeaderBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + serviceHeader.offsetWidth
                && serviceHeaderBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + serviceHeader.offsetHeight) {
                setIsServicesHeaderInViewPort(true);
            }

            let serviceOne: HTMLElement = document.getElementById('service1')!;
            var serviceOneBounding = serviceOne.getBoundingClientRect();

            if (serviceOneBounding.top >= - serviceOne.offsetHeight
                && serviceOneBounding.left >= - serviceOne.offsetWidth
                && serviceOneBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + serviceOne.offsetWidth
                && serviceOneBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + serviceOne.offsetHeight) {
                setIsServiceOneInViewPort(true);
            }

            let serviceTwo: HTMLElement = document.getElementById('service2')!;
            var serviceTwoBounding = serviceTwo.getBoundingClientRect();

            if (serviceTwoBounding.top >= - serviceTwo.offsetHeight
                && serviceTwoBounding.left >= - serviceTwo.offsetWidth
                && serviceTwoBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + serviceTwo.offsetWidth
                && serviceTwoBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + serviceTwo.offsetHeight) {
                setIsServiceTwoInViewPort(true);
            }

        });
    }, []);

    return <div id='services' className='bg-white space-y-12 lg:space-y-15 py-36'>
        <div id='serviceHeader' className={`flex flex-col items-center ${isServicesHeaderInViewPort && 'animate-slideUp duration-1000'}`}>
            <h2 className='sec-header-title'>what we do</h2>
            <h3 className='sec-header-descr text-black-dark'>We’ve got everything you need to launch and grow your business</h3>
            <hr className='border-slate-300 max-w-[12rem] sm:max-w-xl w-full my-4' />
        </div>
        <div id='service1' className={`grid gap-10 lg:grid-cols-2 grid-cols-1 ${isServiceOneInViewPort && 'animate-slideUp duration-1000'}
         items-center space-y-7 md:space-y-0 lg:space-x-16 max-w-2xl lg:max-w-7xl mx-auto`}>
            <div className='flex flex-col lg:space-y-0 space-y-8 lg:flex-row items-center lg:items-start
             justify-start sm:space-x-5'>
                <AiFillFormatPainter className='w-52 h-20 text-green-500' />
                <div className='flex lg:items-start lg:space-y-0 space-y-6 items-center flex-col'>
                    <h3 className='text-3xl pb-3 font-semibold capitalize'>brand identity</h3>
                    <p className='text-slate-500 px-4 sm:px-0 max-w-md leading-relaxed text-center lg:text-left'>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-y-0 space-y-8 items-center lg:items-start 
            justify-start sm:space-x-5'>
                <AiFillBuild className='w-52 h-20 text-green-500' />
                <div className='flex lg:items-start lg:space-y-0 space-y-6 items-center flex-col'>
                    <h3 className='text-3xl pb-3 font-semibold capitalize'>Illustration</h3>
                    <p className='text-slate-500 max-w-md px-4 sm:px-0 leading-relaxed text-center lg:text-left'>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
            </div>
        </div>
        <div id='service2' className={`grid gap-10 lg:grid-cols-2 grid-cols-1 ${isServiceTwoInViewPort && 'animate-slideUp duration-1000'}
         items-center space-y-7 md:space-y-0 lg:space-x-16 max-w-2xl lg:max-w-7xl mx-auto`}>
            <div className='flex flex-col lg:space-y-0 space-y-8 lg:flex-row items-center lg:items-start 
            justify-start sm:space-x-5'>
                <AiFillRocket className='w-52 h-20 text-green-500' />
                <div className='flex lg:items-start lg:space-y-0 sm:space-y-6 items-center flex-col'>
                    <h3 className='text-3xl pb-3 font-semibold capitalize'>Marketing</h3>
                    <p className='text-slate-500 max-w-md px-4 sm:px-0  leading-relaxed text-center lg:text-left'>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-y-0 space-y-8 items-center lg:items-start justify-start
             sm:space-x-5'>
                <AiOutlineGlobal className='w-52 h-20 text-green-500' />
                <div className='flex lg:items-start lg:space-y-0 space-y-6 items-center flex-col'>
                    <h3 className='text-3xl pb-3 font-semibold capitalize'>Web Design</h3>
                    <p className='text-slate-500 max-w-md px-4 sm:px-0 leading-relaxed text-center lg:text-left'>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Services;
