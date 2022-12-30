import React from 'react'
import logoSection from "../Assets/logoSection.png"
import rotating_logo from "../Assets/rotating_logo.svg"
const Consulting = () => {
  return (
    <div className='Consulting'>
      <div data-aos="fade-left" data-aos-duration="1500">
        <div className='imagediv z'>
          <img className='rotate' src={rotating_logo} alt="logo" />
          <img className='logosection' src={logoSection} alt="logo" />
        </div>
        <div className='imagediv zz'>
          <p className='webconsulting'>
            Web3 Consulting & Advisory
          </p>
        </div>
      </div>
      {/* 
      <div className='imagediv zzz' data-aos="fade-left" data-aos-duration="1500">
        <button className='servicebtn' >Services</button>
      </div> */}

      {/* <div class="slider">
        <div class="slide-track">

          <div class='slide' >Artwork & Metadata</div>
          <div class='slide' >WebDeveloper</div>
          <div class='slide' >Consulting & Advisory</div>
          <div class='slide' >Smart Contracts</div>

          <div class='slide' >Artwork & Metadata</div>
          <div class='slide' >WebDeveloper</div>
          <div class='slide' >Consulting & Advisory</div>
          <div class='slide' >Smart Contracts</div>
          <div class='slide' >WebDeveloper</div>

          <div class='slide' >Artwork & Metadata</div>
          <div class='slide' >WebDeveloper</div>
          <div class='slide' >Consulting & Advisory</div>
          <div class='slide' >Smart Contracts</div>

          <div class='slide' >Artwork & Metadata</div>
          <div class='slide' >WebDeveloper</div> 

        </div>
      </div> */}

      {/* <div class="main_marquee">
        <div className='marquee_content' id='marquee_1'>
          <div className='dev' >Artwork & Metadata</div>
          <div className='dev' >WebDeveloper</div>
          <div className='dev' >Consulting & Advisory</div>
          <div className='dev' >Smart Contracts</div>
        </div>
        <div className='marquee_content' id='marquee_2'>
          <div className='dev' >Artwork & Metadata</div>
          <div className='dev' >WebDeveloper</div>
          <div className='dev' >Consulting & Advisory</div>
          <div className='dev' >Smart Contracts</div>
        </div>
        <div className='marquee_content' id='marquee_3'>
          <div className='dev' >Artwork & Metadata</div>
          <div className='dev' >WebDeveloper</div>
          <div className='dev' >Consulting & Advisory</div>
          <div className='dev' >Smart Contracts</div>
        </div>
      </div> */}
    </div >
  )
}

export default Consulting