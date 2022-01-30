import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import GreenBanner from '../components/GreenBanner'
import Header from '../components/Header'
import RecentWorks from '../components/RecentWorks'
import Services from '../components/Services'
import { selectIsOpened, setIsOpened } from '../slices/DrawerSlice';
import { FaArrowUp, FaClosedCaptioning, FaXing, FaXingSquare } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineUp } from 'react-icons/ai'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Drawer from '../components/Drawer'

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY >= 450) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    })
  }, []);


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
          <div id='contact' className='relative w-full'>
            <ContactUs />
            <div className='w-[0.5] h-48 mt-[-90px] ml-[50%] mx-auto items-center flex justify-center absolute top-0 border border-green-400'></div>
          </div>
          <Footer />
        </main>
      </div>


      <div
        onClick={() => {
          if (!isScrolled) return;
          scrollTo({
            behavior: "smooth",
            top: 0
          })
        }}
        className={`bg-black-dark  ${isScrolled ? 'inline-block bg-black-dark text-white cursor-pointer' : "bg-transparent"}
        transition-all ease-in duration-[800ms] text-transparent  p-5 z-[60] fixed bottom-8 right-4`}>
        <AiOutlineUp className={`w-6 transition-all ease-in duration-[800ms] ${isScrolled ? 'text-white' : 'text-transparent'} `} />
      </div>

      <Drawer />

    </div>
  )
}
