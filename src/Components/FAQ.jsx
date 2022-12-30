import React, { useEffect } from "react";
import FAQAccordion from './FAQAccordion';
import { useLocation } from 'react-router-dom'
import $ from 'jquery'

const FAQ = () => {

  const FAQ_Accordion1 = [
    {
      title: "What is web2?",
      description: "Web2 represents a change from static web pages with little to no user interaction (web1) to dynamic & interactive web pages through features like user-generated content, viewing the internet as a platform rather than just a network, software as a service via API implementation technology, and the expansion of social media.",
    },
    {
      title: "What is web3?",
      description: "Web3 is the latest iteration of the internet often referred to as the \"internet of value.\" Web3's blockchain underpinning makes it possible for a decentralized version of the worldwide web in which those who produce content, data, and applications own and have the potential to profit from their intellectual property using open and permissionless protocols.",
    },
    {
      title: "What is the purpose of web3?",
      description: "Web3 has the potential to lead the world toward a decentralized future where billions of people have access to open-source permissionless protocols enabling the rebalancing of power away from big tech and toward individual users.",
    },
    {
      title: "How does web3 impact the creator economy?",
      description: "Web2 content creators rely on sponsorship deals, advertising, and affiliate marketing to monetize their time, efforts, and intellectual property. In contrast, web3 empowers content creators to establish and manage their own communities, provide value to their communities so their communities can reciprocate that value, and serves as an overall blueprint for disrupting the status quo.",
    },
  ]
  const FAQ_Accordion2 = [{
    title: "What are non-fungible tokens?",
    description: "Non-fungible tokens (NFTs) are digital cryptographic assets living on blockchains that can be distinguished from one another by pointing to specific on-chain or off-chain metadata. Unlike fungible tokens like Bitcoin & Ethereum – which are interchangeable and can thus be used as a medium for business transactions – NFTs are individually unique and offer an irrefutable way of verifying the provenance (origin) of digital assets by leveraging the technology of decentralized & permissionless blockchains.",
  },
  {
    title: "What are some challenges with web3?",
    description: "Web3 requires a significant amount of time, research, and experimentation resulting in cumbersome barriers to entry for many people. Furthermore, what many consider one of web3's best features where users have complete ownership and control of their data, can also end up being the worst feature as individual users are fully responsible for their data and user error or malicious code can result in a total & permanent loss of digital assets.",
  },
  {
    title: "Should my brand leverage web3?",
    description: "As digital transactions continue to increase and billions of people spend more time online, companies must remain at the cutting edge of the web3 paradigm to ensure they innovate, adapt, and remain relevant. As blockchain technology is more widely understood and adopted, brands must adapt their business models, leverage the web3 tech stack, enhance interactive touch points with customers, and build tight-knit communities that rally around value and internet meme culture.",
  },
  {
    title: "How can my brand leverage web3?",
    description: "There are many ways brands can implement web3 strategies. Examples include accepting cryptocurrency for goods & services, integrating NFT artwork & collectibles, adopting in-game digital assets, accepting NFT ticketing for IRL events, purchasing branded virtual land in the metaverse, leveraging NFTs for memberships, loyalty programs, and exclusive subscription services which increases brand loyalty by increasing touchpoints from brand to consumer, and integrating NFT fashion & wearables leveraging technologies like near-field communication."
  }]
  const location = useLocation()

  useEffect(() => {
    $(document).ready(function () {
      if (location.hash === "#faq") {
        window.scrollTo(0, $('#faq')[0].offsetTop);
      }
    })
  }, [location])

  return (
    <>
      <div className='questionheading' id='faq'>
        <p className='questiontext' >Frequently Asked Questions</p>
      </div>

      <div className=" faq_container">
        <div className="accordion_container">
          {FAQ_Accordion1.map((item, index) => {
            return (
              <FAQAccordion title={item.title} content={item.description} key={index} />
            )
          })}
        </div>
        <div className="accordion_container">

          {FAQ_Accordion2.map((item, index) => {
            return (
              <FAQAccordion title={item.title} content={item.description} key={index} />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default FAQ