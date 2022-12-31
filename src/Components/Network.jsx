import React from 'react'
import networkl from "../Assets/networkl.png"
import networkr from "../Assets/networkr.png"
import networkc from "../Assets/networkc.png"
import current from "../Assets/current.png"
import profileimage from "../Assets/profileimage.jpg"
import { BsArrowRight, } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Network = () => {
    return (
        <>
            <div className='network-container'>
                <p className='networktext'>Network</p>
                <div className=' threeicons'>
                    <div className='network_container'>
                        <a href='https://twitter.com/FerrumNetwork' target='_blank' className='network_img'>
                            <div style={{ width: "100%", maxWidth: 'fit-content' }}>
                                <img src={networkl} alt="network logo" />
                            </div>
                        </a>
                        <a href='https://twitter.com/midnightlabshq' target='_blank' className='network_img'>
                            <div style={{ width: "100%", maxWidth: 'fit-content' }}>
                                <img src={networkc} alt="network logo" />
                            </div>
                        </a>
                        <a href='https://twitter.com/0xPioneers' target='_blank' className='network_img'>
                            <div style={{ width: "100%", maxWidth: 'fit-content' }}>
                                <img src={networkr} alt="network logo" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='cstyle'>
                    <div className='card-shadow'></div>
                    <div className='row makerow'>
                        <div className='col-md-6 wholediv'>
                            <div className='ryanlogo'>
                                <img src={current} alt="side_img" />
                            </div>
                        </div>
                        <div className='col-md-6  centeralign'>
                            <div>
                                <div className="profile-img">
                                    <img height="100%" width="100%" alt="profile" src={profileimage} />
                                </div>
                                <p className='ryan'>NuFracTal</p>
                                <p className='founder'>Founder</p>
                                <Link to="about" className='addmore'>
                                    about me
                                    <BsArrowRight fontSize="35px" />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Network