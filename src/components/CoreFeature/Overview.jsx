import React from 'react';
import Video from '../../assets/images/Video.mp4'

const Overview = () => {
  return (
    <div>
        <div className='items-center text-white lg:mx-14'>
                    {/* <img src={trophy} className='-mt-70'/> */}
                    <h1 className='text-[4rem] leading-[1.1] font-bold'>OVERVIEW & VISION </h1>
                    <p className='text-[1.3rem] leading-6 lg:mx-44 mx-2 m-5'>
                        Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to 
                        transform the cricketing world. By leveraging blockchain technology, 
                        we provide a platform that ensures transparency, security, 
                        and engagement for all stakeholders in the cricket community</p>

                        <div className='lg:flex sm:flex grid grid-cols-1 gap-4 justify-center lg:m-2 sm:m-2 mx-10 sm:m-5'>
                          <iframe
                            // width="560"
                            // height="315"
                            src="https://usdtclubs.biz/website/d/images/video.mp4" 
                            title="YouTube video player"
                            allow="accelerometer; thumbnail; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='border border-4 border-secondary lg:w-[460px] lg:h-[262px] sm:w-[432px] sm:h-[190px] w-[300px] h-[170px]'
                          ></iframe>

                          <video src={Video} controls
                            className='border border-4 border-secondary lg:w-[460px] lg:h-[262px] sm:w-[432px] sm:h-[190px] w-[300px] h-[170px]'
                          />  
                        </div>
                </div>
    </div>
  )
}

export default Overview