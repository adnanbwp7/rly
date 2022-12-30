import React from 'react'
import './Missions.css'
// import { motion, useTransform, useViewportScroll, useScroll } from "framer-motion";
import $ from 'jquery';

const Missions = () => {

    function isInViewport(v) {
        var elementTop = $(v).offset().top;
        var elementBottom = elementTop + $(v).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(document).ready(function () {
        var lastScrollTop = 0;

        $(window).scroll(function () {
            var check1 = isInViewport('#card4')
            if (check1) {
                $(".circle-main").addClass('animate')
            }
            // var st = $(this).scrollTop();
            console.log(lastScrollTop);

        });

    })
    // console.log(scale, "<=SrollY")

    return (
        <>
            <div className="mission_container">
                <div className="missin_heading-text">We assist brands with launching their own products.</div>
                <div className="mission_heading" id='card5'>Our Mission</div>

                <div className="mission_card_container">
                    <div className="mission_card" id='card1' >
                        <div className="circle-main"  >
                            <div className="big_circle" >
                                <div className="small_circle" ></div>
                            </div>
                        </div>
                        <div className="card_text">Assist web3 brands with understanding complex models while working & networking with industry professionals who use the web3 tech stack to provide cutting-edge solutions</div>
                    </div>

                    <div className="mission_card" id='card2'>
                        <div className="circle-main"  >
                            <div className="big_circle" >
                                <div className="small_circle" ></div>
                            </div>
                        </div>
                        <div className="card_text">
                            Utilize disruptive & emerging technologies to foster innovation, build community-centric brands, and contribute to the innovation, enhancement, and refinement of web3.
                        </div>
                    </div>

                    <div className="mission_card" id='card3' >
                        <div className="circle-main"  >
                            <div className="big_circle" >
                                <div className="small_circle" ></div>
                            </div>
                        </div>
                        <div className="card_text">
                            Leverage a community of contributors & creatives to celebrate, advance, and meaningfully contribute to web3.
                        </div>

                    </div>
                    <div id="card4" style={{ height: '20px', width: '100%', }}></div>
                </div>
            </div>
        </>
    )
}

export default Missions