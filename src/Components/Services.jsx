import React, { useEffect } from 'react'
import ServiceCard from './ServiceCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

const Services = () => {
    const location = useLocation()

    const carddata = [
        {
            number: 1,
            title: "Smart Contracts",
            Description: "Direct access to business partner and 0xPioneers' CEO Brian Ludlam, who engineers, develops, deploys, and interfaces innovative smart contracts for any web3 use case."
        },
        {
            number: 2,
            title: "Web Development",
            Description: "Network of talented web developers who build unique UI & UX interfaces using JavaScript, HTML, CSS, React (JS framework), TypeScript, and cross-browser compatibility for seamless web3 integration & NFT minting functionality."
        },
        {
            number: 3,
            title: "NFT Generation",
            Description: "Expertise in organizing NFT artwork layers, arranging traits & attributes, designing unique & robust metadata, hosting data to IPFS, and engineering final NFT builds."
        },
        {
            number: 4,
            title: "Consulting & Advisory",
            Description: "Expertise in the XYZs of web3 consulting & advisory focusing on brand building, community growth & management, Discord strategy, marketing strategy, NFT pre & post-launch strategy, scenarios to avoid, and overall go-to-market strategy for web3 brands."
        },
        {
            number: 5,
            title: "NFT Storytelling",
            Description: "Expertise in NFT storytelling & character development."
        },
        {
            number: 6,
            title: "Discord Server Setup",
            Description: "Expertise in Discord server setup enabling brands a hassle-free way of leveraging Discord’s web3 functionality to create the “center of gravity” for their communities."
        }
    ]

    useEffect(() => {
        console.log(location);
        $(document).ready(function () {
            if (location.hash === "#service") {
                window.scrollTo(0, $('#service')[0].offsetTop);
            }
        })
    }, [location.hash || location.pathname])

    return (
        <div className='pcdiv' id='service'>
            <p className='paraservices' >Services</p>
            <div className='container'>
                <div className='row flex xzz'>
                    {
                        carddata.map((val, index) => {
                            return (
                                <>
                                    <ServiceCard
                                        //  cursor={cursor}
                                        number={val.number} key={index} title={val.title} Description={val.Description} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='inquirybtndiv'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSda-mIb7TwXpkwwtbvS2OLND4i0JMsGmGvHUNsZlet47X8jpA/viewform' target='_blank' className='inquiry'>
                    Submit Inquiry
                    <BsArrowRight style={{ fontSize: "25px", marginLeft: "10px" }} />
                </a>
            </div>
        </div>
    )
}

export default Services