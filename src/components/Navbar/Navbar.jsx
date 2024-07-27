import React, {useState} from 'react';
import { IoMdSearch } from "react-icons/io";
import Image from '../../assets/images/logo.jpg';
import { FaCaretDown, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import Button from '../Shared/Button';

const MenuLinks = [
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
]

const Navbar = ({handleOrderPopup}) => {
const [isOpen, setIsOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className='m-5'>
      <div className='text-white duration-200 relative z-40 lg:mx-24 sm:mx-6'>
       <div className='pt-0 pb-5'>

        <div className='container flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <a href='#'>
                <img src={Image} className='size-11' alt="Logo" />
              </a>
            </div>

            {/* Aligning nav bar options and button to the right */}
            <div className='flex items-center gap-4 ml-auto'>
              <div className='hidden sm:flex lg:flex gap-4 text-2xl'>
                <ul className='flex gap-4 uppercase'>
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className='inline-block px-4 font-semibold text-white hover:text-secondary dark:hover:text-white duration-200'>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='font-bold hidden lg:flex sm:flex'>
                <Button text='TOKEN LAUNCH' textColor={'text-white'} />
              </div>
              <button className="lg:hidden sm:hidden p-3" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes className="text-xl text-white" /> : <FaBars className="text-xl text-white" />}
              </button>
            </div>
          </div>

        {isOpen && (
          <div 
          className="lg:hidden bg-primary w-full h-screen fixed
           right-0  text-white">
            <ul className="flex flex-col gap-2 mt-4 text-center w-full ">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link}
                    className="inline-block font-bold w-full
                     rounded-md py-10 text-2xl hover:bg-secondary duration-200">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className='font-bold mt-5'>
            <Button 
            text = 'TOKEN LAUNCH'
            textColor={'text-white'}/>
            </div>
            

          </div>
        )}

        </div> 
      </div>
    </div>
  )
}

export default Navbar