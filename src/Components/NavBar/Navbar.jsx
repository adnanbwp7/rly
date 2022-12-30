import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import menu from '../../Assets/menu.png'
import close from '../../Assets/close.png'

import light from '../../Assets/light.png'
import dark from '../../Assets/dark.png'

import { FaTwitter } from "react-icons/fa";
import { Link, redirect, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import $ from 'jquery'


const Navbar = () => {
  const ref = useRef()
  const [icon, setIcon] = useState(false)
  const location = useLocation();
  const [about, setAbout] = useState(false)

  useEffect(() => {
    console.log(location.pathname);
    $(document).ready(function () {
      if (location.pathname === "/about") {
        setAbout(true)
      } else {
        setAbout(false)
      }
    })
  }, [location.pathname])


  const showNavbar = () => {
    ref.current.classList.toggle("responsive_nav");
    setIcon(!icon)
  };

  const hideNavBar = () => {
    ref.current.classList.toggle("responsive_nav");
    setIcon(!icon)
  }


  return (
    <>
      <div className={`navbar_container ${icon && 'bg-gray'}`}>
        <Link smooth={true} to='/' className="logo">
          <img src={require('../../Assets/icon.png')} alt="" />
        </Link>
        {about ? "" :
          <button onClick={showNavbar} className="menu-icon">
            <img src={icon ? close : menu} alt="" srcset={icon ? close : menu} />
          </button>
        }
        <div className="links" ref={ref} style={{ justifyContent: about && "flex-end" }}>
          <div className="link_container" style={{ display: about ? "none" : "flex" }}>
            <Link to='about' onClick={hideNavBar} smooth={true} className='link-text'>ABOUT</Link>
            <a smooth={true} onClick={hideNavBar} href='#service' className='link-text'>SERVICES</a>
            <a smooth={true} onClick={hideNavBar} href='#faq' className='link-text'>F.A.Q.</a>
          </div>
          <div className="social">
            <a target='_blank' href='https://twitter.com/NuFracTal' className='link-text'>
              <FaTwitter className='icons-color' />
            </a>
            <a target='_blank' href='https://linktr.ee/nufractal' className='link-text'>
              <img src={icon ? light : dark} style={{ width: '16px', height: '16px' }} alt="" />
            </a>
          </div>
        </div>
        {about ?
          <div className="social mobile" style={{}}>
            <a target='_blank' href='https://twitter.com/NuFracTal'>
              <FaTwitter className='icons-color' style={{ color: icon ? "#000" : "#F1F3F4" }} />
            </a>
            <a target='_blank' href='https://linktr.ee/nufractal'>
              <img src={icon ? light : dark} style={{ width: '16px', height: '16px' }} alt="" />
            </a>
          </div>
          : ""
        }
      </div>
    </>
  )
}

export default Navbar