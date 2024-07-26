import React from 'react';

const Button = ({text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
    onclick={handler}
    className={`${bgColor} ${textColor}
    cursor-pointer hover:scale-105 hover:bg-secondary
    duration-300 py-2 px-8 rounded-l hover:data-aos='fade-right'
    relative z-10 border border-2 border-purple-500`}>
        {text}
    </button>
  )
}

export default Button