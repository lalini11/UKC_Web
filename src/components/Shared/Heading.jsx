import React from 'react';

const Heading = ({title, subtitle}) => {
  return (
    <div className='text-center my-8
    max-w-[600px] mx-auto space-y-2 text-white uppercase'>
        <h1 className='text-3xl font-bold lg:text-5xl'>{title}</h1>
        <p className='text-xs text-gray-400'>{subtitle}</p>
    </div>
  )
}

export default Heading