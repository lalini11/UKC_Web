import React from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/images/banner.jpg';
import Button from '../Shared/Button';


const Banner = ({ handleOrderPopup }) => {
  return (
    <div>
            <div
                className='overflow-hidden rounded-l min-h-[250px] sm:min-h-[650px] lg:w-full flex justify-center items-center'
                style={{
                    backgroundImage: `url(${Image1})`, // Change Image1 to the desired background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='container pb-8 sm:pb-06'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col justify-center gap-4 sm:pl-3 sm:pt-0 text-left sm:text-left order-2 sm:order-1 relative z-10 lg:m-14 m-2 sm:m-2'>
                            
                        <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-xl sm:text-4xl lg:text-5xl font-bold text-white'
                            >
                                {'CRICKET TRUSTED CRYPTO UKC COIN'}
                            </h1>

                            <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-l sm:text-xl lg:text-l text-white hidden sm:block text-justify'
                            >
                                {'Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world. By leveraging blockchain technology, we provide a platform that ensures transparency, security, and engagement for all stakeholders in the cricket community.'}
                            </h1>
                            
                            <div
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='500'
                                data-aos-delay='300'
                                className='flex flex-row lg:gap-8 sm:gap-4 gap-4 m-3'
                            >
                                <Button
                                    text="Get UKC Coin"
                                    textColor="text-white"
                                    handler={handleOrderPopup}
                                />
                                <Button
                                    text="Learn More"
                                    textColor="text-white"
                                    handler={handleOrderPopup}
                                />
                            </div>
                        </div>
                        <div className='order-1 sm:order-2'>
                            {/* Placeholder for slider or additional content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner