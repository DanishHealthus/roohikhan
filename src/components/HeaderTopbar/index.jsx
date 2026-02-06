import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-009-telephone"></i>(307) 555-0133</li>
                                <li><i className="fi flaticon-010-email"></i>demo.Avukat@gmail.com</li>
                                <li><i className="fi flaticon-011-maps-and-flags"></i> 244 Royal Ln. Mesa, New Jersey
                                    463</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul className="social">
                                <li><Link to="/"> <i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                            <Link to="/contact" className="top-btn">Free Consulting</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;