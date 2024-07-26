import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Banner from './components/Banner/Banner';

import Features from './components/CoreFeature/Features';
import Footers from './components/Footers/Footers';
import Popup from './components/Popup/Popup';
import AOS from "aos";
import 'aos/dist/aos.css';
import Starts from './components/CoreFeature/Starts';
import Banner2 from './components/Banner/Banner2';
import Overview from './components/CoreFeature/Overview';


function App() {
  const [count, setCount] = useState(0);
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration:2000,
        easing: 'ease-in-sine',
        delay:100,
        offset:100,
      });
      AOS.refresh();
  }, [])
  return (
    <div>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Banner handleOrderPopup={handleOrderPopup}/>
    <Overview/>
    <Features/>
    <Banner2/>
    <Starts/>
    <Footers/>
    <Popup orderPopup={orderPopup}
    handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App
