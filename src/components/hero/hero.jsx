import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/slider/roohi.png'


const Hero = () => {
    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="hero-text-wrap">
                            <div className="sub-title">
                                <span>Best Lawer Egency</span>
                            </div>
                            <div className="slide-title">
                                <h2>Creative solutions for legal problems</h2>
                            </div>
                            <div className="slide-text">
                                <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque mauris
                                    malesuada dui. Tortor, sit nulla odio enim neque. Enim erat augue id massa ultrices
                                    ut
                                    orci.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                                <Link to="/" className="theme-btn-s2">Explore more</Link>
                            </div>
                        </div>
                        <div className="lawyer-pic">
                            <img style={{ width: "600px", objectFit: 'cover', objectPosition: 'top' }} src={himg} alt="" />
                            <div className="lawyer-shape"></div>
                            <div className="exprience">
                                <div className="exprience-left">
                                    <h4>12</h4>
                                </div>
                                <div className="exprience-right">
                                    <h4>Years Of Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;