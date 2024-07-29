import React from 'react';
import { FaPeopleRobbery, FaSackDollar, FaPeopleGroup } from "react-icons/fa6";
import { TbCoinRupeeFilled } from "react-icons/tb";
import Heading from '../Shared/Heading';

  const FeatureData= [
    {
        id: 1,
        img: <FaPeopleRobbery className='size-10' />,
        title: 'True Fan Engagement',
        subtitle: 'Utilizing blockchain technology to empower fans with voting rights in the governance of UKC events. Choose the where, who, and when, making fans the ultimate reference point for UKC.',
        aosdelay: '0',
    },
    {
        id: 2,
        img: <TbCoinRupeeFilled className='size-10' />,
        title: 'The First Easy-to-Use Cricket Cryptocurrency - UKCCOIN',
        subtitle: 'Earn and trade virtual goods seamlessly within the thriving UKC community platform. Experience a revolutionary sporting dimension with real ownership and tangible value.',
        aosdelay: '100',
    },
    {
        id: 3,
        img: <FaPeopleGroup className='size-10' />,
        title: 'Backed by Communities and Cricketers',
        subtitle: 'Join millions of engaged fans working together to create a decentralized voice and virtual economies. UKCCOIN empowers fans to monetize content, fostering a community-driven culture of passion and collaboration.',
        aosdelay: '200',
    },
    {
        id: 4,
        img: <FaSackDollar className='size-10' />,
        title: 'Sporting Value',
        subtitle: 'Promoting a culture of passion, collaboration, and pride among players. UKCCOIN provides players with more control over their content, ensuring fans feel valued, and leading to increased revenue and engagement.',
        aosdelay: '300',
    },
]

const Features = () => {
  return (
    <div className='container'>
        <div className='py-8 text-white'>
        <p className='text-[45px] lg:text-[75px] leading-[1.1] justify-center text-secondary font-semibold'>CORE FEATURES</p>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8 m-5 lg:m-14'> 
            {FeatureData.map((data) =>(
                <div 
                data-aos= 'fade-up'
                data-aos-delay={data.aosDelay}
                className='group rounded-2xl p-4 flex flex-col items-center text-secondary' key={data.id}>
                    <div className='relative'>
                        {data.img}
                    </div>
                    <div className='my-2'>
                        <h2 className='font-semibold text-[1.2rem] leading-[1.1]'>{data.title}</h2>
                        <p className='text-[1rem] leading-[1.4]'>{data.subtitle}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <p className='lg:text-[2.5rem] sm:text-[2rem] text-[1.8rem] leading-[1.1] justify-center font-bold'>PURPOSE</p>
        <p className='lg:mx-14 mx-2 mb-7 sm:mx-5 text-[1.2rem]'>The Most Trusted Cryptocurrency Coin.
        Ultimate Kricket Challenge (UKC) is the new frontier in the world of cricket,
         combining the excitement of the sport with the innovative power of blockchain technology. 
         Our token, UKC, is designed to bring fans, players, and investors together in a seamless, 
         decentralized ecosystem.</p>
    </div>
    </div>
  )
}

export default Features