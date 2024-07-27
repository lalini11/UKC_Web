import React from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/images/img3.jpg';
import Button from '../Shared/Button';
import trophy from '../../assets/images/trophy.png'
import events from '../../assets/images/events.png'


const Banner2 = ({ handleOrderPopup }) => {
  return (
    <div>
        <div className='flex justify-center items-center text-white'>
                    <img src={trophy} className='mx-8'/>
                </div>
            <div
                className='overflow-hidden rounded-l min-h-[250px] sm:min-h-[650px] lg:w-full h-full -mt-32 justify-center items-center'
                style={{
                    backgroundImage: `url(${Image1})`, // Change Image1 to the desired background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}> 
                <div className='items-center text-white mt-36 lg:mx-14'>
                    {/* <img src={trophy} className='-mt-70'/> */}
                    <h1 className='text-3xl font-bold'>UKC FUNZONE</h1>
                    <p className='text-base lg:mx-44 mx-2 m-5'>Holders of the token can explore the Fan Zone, 
                        where they have the ability to oversee their tokens and participate in exclusive promotions. 
                        One exciting opportunity includes the chance to spend a day with the renowned UKC stars and so much more</p>
                </div>


                <div className='container pb-8 sm:pb-06 mr-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* <div className="row"> */}
                            <div className="col-6 text-white">
                                
                            </div>
                            <div className="col-6 sm:col-6 lg:col-12 text-white">
                                <div className='flex-col justify-right gap-4 sm:pl-3 sm:pt-0 text-left sm:text-left order-2 sm:order-1 relative z-10 lg:m-14 m-2 sm:m-2'>
                            
                                <div className='flex justify-left items-center text-white'>
                                    <img src={events} className='mb-5'/>
                                </div>

                           <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-xl sm:text-2xl lg:text-2xl font-bold text-white'
                            >
                                {'UKC FUNZONE'}
                            </h1>

                            <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-base text-white lg:text-justify sm:text-justify text-center my-5'
                            >
                                {'Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world. By leveraging blockchain technology, we provide a platform that ensures transparency, security, and engagement for all stakeholders in the cricket community.Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world. By leveraging blockchain technology, we provide a platform that ensures transparency, security, and engagement for all stakeholders in the cricket community.'}
                            </h1>

                            <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-l sm:text-xl lg:text-xl font-bold text-white my-5'
                            >
                                {'VIEW UPCOMING EVENTS'}
                            </h1>

                            <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-l sm:text-xl lg:text-xl font-bold text-white my-5'
                            >
                                {'EVENTS'}
                            </h1>

                            <h1
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                                className='text-base text-white lg:text-justify sm:text-justify text-center  my-5'
                            >
                                {'Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world. By leveraging blockchain technology, we provide a platform that ensures transparency, security, and engagement for all stakeholders in the cricket community.Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world. By leveraging blockchain technology, we provide a platform that ensures transparency, security, and engagement for all stakeholders in the cricket community.'}
                            </h1>
                            
                        </div>
                            </div>
                        {/* </div> */}
                        
                        <div className='order-1 sm:order-2'>
                            {/* Placeholder for slider or additional content */}
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
  )
}

export default Banner2