import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import Image from '../../assets/images/logo.jpg';

const FooterLinks = [
    {
       id: 1,
       name: 'Events',
       link: '/#'
    } , 
    {
       id: 2,
       name: 'Store',
       link: '/#'
    } , 
    {
       id: 3,
       name: 'Nets',
       link: '/#'
    } , 
    {
       id: 4,
       name: 'Token Launch',
       link: '/#'
    } ,  
   ]

const Footers = () => {
  return (
    <div>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5 lg:mx-14 m-3 sm:mx-5">
              {/*Company Details */} 
              <div className='py-8 px-4 text-left'> 
              <a href='#'
                className='text-primary font-semibold 
                tracking-widest text-2xl uppercase sm:text-3xl'>
                   <img src={Image} className='size-10' />
                </a>
                <p className='text-white lg:pr-24 pt-3'>
                Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world...
                </p>
                {/* <p className='text-white mt-4'>
                    Made with by The Focus Media
                </p>
                <a href="https://youtu.be/aMbGahPZev4?si=_VNubMnwuvUZJi6O"
                target='blank'
                className='inline-block bg-primary text-white
                py-2 px-4 mt-4 text-sm rounded-full'>
                    Youtube
                </a> */}
              </div>
              {/*Footer Links*/}
               <div className='col-span-2 grid grid-cols-2
               sm:grid-cols-3 md:pl-10'>
                    {/*First column links*/}
                    <div className='py-8 px-4 text-left'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3 text-white'>Important Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className='text-white hover:text-black 
                                    duration-300'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Company Address*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto text-white'>
                    {/* <h1 className='text-xl font-semibold sm:text-left mb-3'>
                        Address</h1> */}

                        <div className='text-left'>
                            {/* <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Raipur, Chhattisgarh</p>                                
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+91 1234567890</p>
                            </div> */}
                            {/*Social Links*/}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href='https://www.instagram.com/ultimatekricketchallenge?igsh=Yzk5d280cGN1NDc='>
                                    <FaInstagram className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                                <a href='https://www.facebook.com/ultimatekricketchallenge?mibextid=LQQJ4d'>
                                    <FaFacebook className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                                <a href='https://t.me/+lA7iDGf8ZP1lZWI0'>
                                    <FaTelegramPlane className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
               </div>               
            </div>
        </div>
    </div>
  )
}

export default Footers