import React, { useEffect } from 'react'
import Consulting from './Consulting'
import Contact from './Contact'
import FAQ from './FAQ'
import Missions from './Missions/Missions'
import Network from './Network'
import Services from './Services'
import $ from 'jquery'
import { useLocation } from 'react-router'

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        $(document).ready(function () {
            if (location.pathname === "/") {
                window.scrollTo(0, 0);
            }
        })
    }, [location.pathname])
    
    return (
        <>
            <div className='main-container'>
                <div className="main-bg-img">
                    <img src={require('../Assets/bg_img.png')} className='body-bg-img' alt="bgimg" />
                    <Consulting />
                    <Missions />
                    <Services
                    // cursor={cursor}
                    />
                    <Network />
                </div>
                <FAQ />
                <Contact />
            </div>
        </>
    )
}

export default Home