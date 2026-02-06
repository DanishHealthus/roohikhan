import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {
    return (
        <section className="wpo-hero-style-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>You Don’t Have to
                                    Fight Them Alone
                                    We Are Here.</h2>
                            </div>
                            <div className="btns">
                                <Link to="/about" className="btn theme-btn">Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                </div>
            </div>
        </section>
    )
}

export default Hero3;