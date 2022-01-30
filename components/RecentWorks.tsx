import React, { useEffect, useState } from 'react';

const RecentWorks = () => {
    const [isWorksHeaderInViewport, setIsWorksHeaderInViewport] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', function () {
            let worksHeader: HTMLElement = document.getElementById('worksHeader')!;
            var worksHeaderBounding = worksHeader.getBoundingClientRect();

            if (worksHeaderBounding.top >= - worksHeader.offsetHeight
                && worksHeaderBounding.left >= - worksHeader.offsetWidth
                && worksHeaderBounding.right <= (window.innerWidth || document.documentElement.clientWidth) + worksHeader.offsetWidth
                && worksHeaderBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + worksHeader.offsetHeight) {
                setIsWorksHeaderInViewport(true);
            }
        });
    }, []);

    return <div id='works' className='py-28 bg-black-dark text-white'>
        <div id='worksHeader' className={`max-w-6xl ${isWorksHeaderInViewport && 'animate-slideUp duration-1000'} mx-auto flex flex-col space-y-3 items-center`}>
            <p className='sec-header-title'>
                RECENT WORKS
            </p>
            <div>
                <h3 className='sec-header-descr'>
                    We love what we do, check out some of our latest works
                </h3>
                <hr className='border-gray-600 my-8 max-w-lg mx-auto' />
            </div>
        </div>
    </div>;
};

export default RecentWorks;
