import React from 'react'
import FooterLogo from "../Assets/FooterLogo.png"
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Contact = ({ about }) => {

  return (
    <>
      <div className='contact'>
        {!about && <p className='contactus'>Contact us</p>}
        <div className='flex xflex'>
          <div className='deve' >Smart Contracts</div>
          <div className='deve' >Web Development</div>
          <div className='deve' > NFT Generation </div>
          <div className='deve' >Consulting & Advisory</div>
          <div className='deve' >NFT Storytelling </div>
          <div className='deve' >Discord Server Setup</div>

        </div>
        {
          !about &&
          <div className='inquirybtndiv'>
            <a className='btn_inq' target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSda-mIb7TwXpkwwtbvS2OLND4i0JMsGmGvHUNsZlet47X8jpA/viewform" >
              Submit Inquiry
              <BsArrowRight style={{ fontSize: "25px", marginLeft: "10px" }} />
            </a>
          </div>
        }
      </div>
      <div className='footerfull'>
        <img src={FooterLogo} alt="footerlogo" />
        <div className='footertext'>
          <Link to="/about" className='footeroption'>About</Link>
          <Link to={`${about ? "/#service" : "#service"} `} className='footeroption' >Services</Link>
          <Link to={`${about ? "/#faq" : "#faq"} `} className='footeroption' >F.A.Q.</Link>
        </div>
        <div className='divfooter'>
          <p className='footercopy' >Copyright © 2022 | All rights reserved.</p>
        </div>

      </div>
    </>
  )
}

export default Contact