import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import GreenBanner from '../components/GreenBanner'
import Header from '../components/Header'
import RecentWorks from '../components/RecentWorks'
import Services from '../components/Services'
import { selectIsOpened, setIsOpened } from '../slices/DrawerSlice';
import { FaClosedCaptioning, FaXing, FaXingSquare } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

export default function Home() {
  const isOpened = useSelector(selectIsOpened);
  const dispatch = useDispatch();

  return (
    <div className="bg-hero overflow-x-hidden relative bg-black-faded h-full bg-cover bg-center bg-fixed">
      <Head>
        <title>Glint</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <div className='bg-black-dark relatve bg-opacity-60 h-full font-sans font-mon'>
        <Header />
        <main className=''>
          <Banner />
          <GreenBanner />
          <Services />
          <RecentWorks />
          <Gallery />
          <div className='relative w-full'>
            <ContactUs />
            <div className='w-[0.5] h-48 mt-[-90px] ml-[50%] mx-auto items-center flex justify-center absolute top-0 border border-green-400'></div>
          </div>
          <Footer />
        </main>
      </div>

      <div className={`fixed z-50 
        ${isOpened ? 'translate-x-0' : 'translate-x-full'}
        duration-700 top-0 w-[300px] right-0 bg-black-dark h-[100%] `}>
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
            <p className='text-white text-xl font-bold'>Home</p>
            <p className='text-white text-xl font-bold'>About</p>
            <p className='text-white text-xl font-bold'>Services</p>
            <p className='text-white text-xl font-bold'>Works</p>
            <p className='text-white text-xl font-bold'>Clients</p>
            <p className='text-white text-xl font-bold'>Contacts</p>
          </div>
          <p className={`text-gray-600 ${isOpened && 'animate-slideRight'} `}>Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
        </div>
      </div>

    </div>
  )
}
