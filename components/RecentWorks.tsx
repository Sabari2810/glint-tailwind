import React from 'react';

const RecentWorks = () => {
    return <div className='py-28 bg-black-dark text-white'>
        <div className='max-w-6xl mx-auto flex flex-col space-y-3 items-center'>
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
