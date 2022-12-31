import React, { useEffect } from 'react'
import './About.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Contact from '../Contact'
import { Link, useLocation } from 'react-router-dom'
import $ from 'jquery'

const About = () => {
    const location = useLocation();
    useEffect(() => {
        $(document).ready(function () {
            if (location.pathname === "/about") {
                window.scrollTo(0, 0);
            }
        })
    }, [location.pathname])

    return (
        <>
            <div className="about">
                <div className="about-container">
                    <div className="text_container">
                        <div className="heading">Hi, I'm Ryan.</div>
                        <div className="text_container-text marginTop">
                            I am the Chief Technology Officer for 0xPioneers, a web3 consultant for Ferrum Network, and a 0xDelta cohort member of Midnight Labs.
                        </div>
                        <div className="text_container-text">
                            I have served on active duty in the U.S. Army for 19 years and have held dozens of demanding leadership and project management positions in complex and austere environments.np
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card_Shadow"></div>
                        <div className="card-content">
                            <div className="img_container">
                                <img src={require('../../Assets/left.png')} alt="left" />
                            </div>
                            <div className="card_text">
                                I enjoy building and managing teams who work together to achieve a common goal.
                            </div>
                            <div className="img_container">
                                <img src={require('../../Assets/right.png')} alt="left" />
                            </div>
                        </div>
                    </div>
                    <div className="about_text">
                        When I am not working, I enjoy spending time with family, traveling, fitness, nutrition, listening to metal, all things web3, and meeting incredible like-minded people.
                        <p style={{ margin: '20px 0' }}>I try to enjoy life's journey unattached to an outcome.</p>
                    </div>
                </div>


                <div className="about_text_container">
                    <div className="about_card">
                        <div className="about_card-text">
                            I have been in the blockchain & web3 space since 2017 and keep tabs on innovations like Ethereum L2 &#40; Optimism, Arbitrum, zkSync, StarkNet, Scroll, etc. &#40; , DeFi, NFTs, the vision for a multichain future, and overall direction & innovation of web3.
                        </div>
                        <div className="about_card-text">
                            My goal is to produce more than I consume while broadening my understanding of the web3 space and expanding my network of talented web3 tacticians.
                        </div>

                        <div className="about_card-heading" data-aos="fade-left" data-aos-duration="1500">
                            I believe community is the ultimate form of value & utility.
                        </div>
                        <div className="about_card-heading" data-aos="fade-left" data-aos-duration="1500" style={{ alignSelf: 'flex-end', textAlign: 'left' }}>
                            I believe in trust, transparency, teamwork, cohesion, and loyalty.
                        </div>
                        <div className="about_card-text" data-aos="fade-left" data-aos-duration="1500" style={{ alignSelf: 'flex-end', textAlign: 'left', marginTop: '40px' }}>
                            From a web3 perspective, I want to continue applying these fundamentals to build relationships and elevate those around me. I aim to leverage my experience to help others and bring value to the web3 initiatives & communities with which I am involved.
                        </div>
                        <div className="about_card-text" data-aos="fade-left" data-aos-duration="1500" style={{ alignSelf: 'flex-end', textAlign: 'left', marginTop: '20px' }}>
                            Web3 is a once-in-a-generation paradigm shift and I am obsessed with the technology and overall vision of the blockchain & web3 space.
                        </div>

                        <div className="about_card-heading" data-aos="fade-left" data-aos-duration="1500" style={{ alignSelf: 'flex-end', fontWeight: 300, textAlign: 'left' }}>
                            Are you prepared to  <div style={{ fontWeight: 700 }}> capitalize?</div>
                        </div>
                    </div>

                    <div className="about_btn_grp">
                        <Link to="/" className='btn_inq'>
                            <BsArrowLeft style={{ fontSize: "25px" }} />
                            back to main page
                        </Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSda-mIb7TwXpkwwtbvS2OLND4i0JMsGmGvHUNsZlet47X8jpA/viewform" target="_blank" className='btn_inq'>
                            Submit Inquiry
                            <BsArrowRight style={{ fontSize: "25px" }} />
                        </a>
                    </div>
                </div>
                <Contact about />
            </div>
        </>
    )
}

export default About