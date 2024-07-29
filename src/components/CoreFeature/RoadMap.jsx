import React from 'react';
import Slider from "react-slick";

  const BlogSliderData= [
    {
        id: 1,
        title: 'December 2020',
        subtitle: '1st Season, unique format of one-on-one cricket challenge',
        aosdelay: '0',
    },
    {
        id: 2,
        title: 'March 2021',
        subtitle: '2nd Season of 16- match tournaments with global superstars a contender.',
        aosdelay: '200',
    },
    {
        id: 3,
        title: 'September 2023',
        subtitle: 'Conceptualisation and planning to develop a cricket enthusiast and the potential for a cricket-based token and exchange platform.',
        aosdelay: '400',
    },
    {
        id: 4,
        title: 'February 2024',
        subtitle: 'Exciting pre-ICOs launch for necessary tokens at a discounted price for private sale.',
        aosdelay: '600',
    },
    {
        id: 5,
        title: 'June 2024',
        subtitle: 'Exciting pre-ICOs launch for necessary tokens at a discounted price for private sale.',
        aosdelay: '800',
    },
    {
        id: 6,
        title: 'September 2024',
        subtitle: 'Coming up with 3rd season of Ultimate Kricket Challenge in UAE with association SACF.',
        aosdelay: '1000',
    },
    {
        id: 7,
        title: 'January 2025',
        subtitle: 'Listing coin on multiple exchange platform such as- CoinMarketCap, Coin Base, Super Coin, Ku Coin and more.',
        aosdelay: '1000',
    },
    {
        id: 6,
        title: 'July 2025',
        subtitle: 'Integration of the token with cricket tournament platforms for betting, rewards, and fan engagement.',
        aosdelay: '1000',
    },
]

const RoadMap = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 790, // medium devices breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // large devices breakpoint
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
        ],
      };
  return (
    <div className='my-12'>
    <div className="container">
        <div className='text-white'>
        <p className='lg:text-[2.5rem] sm:text-[2rem] text-[1.8rem] leading-[1.1] justify-center font-bold'>Road Map</p>
        <p className='lg:mx-14 mx-2 mb-7 sm:mx-5 text-[1.2rem]'>
            Ultimate Kricket Challenge (UKC) is a revolutionary token that aims to transform the cricketing world.
        </p>
        </div>
        {/*Blog section*/}  
        <Slider {...settings} className='text-white'>
            {BlogSliderData.map((data) => (
                <div 
                    key={data.title}
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    className='lg:mx-4 sm:mx-4 mx-2 p-4 flex justify-center items-center gap-4'
                >
                    {/*Image section */}
                    <div className=' flex items-center justify-center'>
                    <div className='bg-white rounded-full w-[150px] h-[150px]  flex items-center justify-center'>
                        <div className='bg-secondary rounded-full w-[130px] h-[130px] flex items-center justify-center'>
                            <span className='text-white text-xl justify-center'>{data.title}</span>
                        </div>
                    </div>
                    </div>
                    {/*Content section */}
                    <div className='space-y-5 m-3 mx-5'>
                        <p className='line-clamp-4 text-sm text-white font-bold'>{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>
  )
}

export default RoadMap