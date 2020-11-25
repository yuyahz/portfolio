import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { home0bjOne, home0bjTwo, home0bjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...home0bjOne} />
            <InfoSection {...home0bjTwo} />
            <InfoSection {...home0bjThree} />

        </>
    )
}

export default Home;
