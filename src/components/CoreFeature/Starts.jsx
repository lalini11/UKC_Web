import React from 'react'
import Heading from '../Shared/Heading';
import Image1 from '../../assets/images/i1.png';
import Image2 from '../../assets/images/i2.png';
import Image3 from '../../assets/images/i3.png';
import Image4 from '../../assets/images/i4.png';
import Button from '../Shared/Button';


  const StarsData= [
    {
        id: 1,
        img: Image1,
        aosdelay: '0',
    },
    {
        id: 2,
        img: Image2,
        aosdelay: '200',
    },
    {
        id: 3,
        img: Image3,
        aosdelay: '400',
    },
    {
        id: 4,
        img: Image4, 
        aosdelay: '600',
    },
]

const Starts = () => {
  return (
    <div className='container'>
        <div className='py-8'>
            <p className='text-[5rem] leading-[1.1] justify-center text-white'> FOLLOW THE STARS </p>
        {/* <Heading title='Follow The Stars'/> */}
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-1 m-5 lg:m-14 '> 
            {StarsData.map((data) =>(
                <div 
                data-aos= 'fade-up'
                data-aos-delay={data.aosDelay}
                className='group rounded-2xl p-2 -mt-3 flex flex-col items-center text-white' key={data.id}>
                    <div className='relative'>
                    <img src={data.img} alt=''
                        className='w-[240px] h-[240px] object-cover
                         rounded-md items-center'/>
                    </div>
                </div>
            ))}
            </div>
            <Button 
            text = 'GET UKC COIN'
            textColor={'text-white'}/>
        </div>
    </div>
    </div>
  )
}

export default Starts