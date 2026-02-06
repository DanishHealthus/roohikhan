import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import Practices from '../../api/Practices';



const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu euismod.
                                    Egestas
                                    in morbi tristique ornare vulputate vitae enim.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/#">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/#">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/#">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/#">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice">Practice Area</Link></li>
                                    <li><Link onClick={ClickHandler} to="/attorneys">Team</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case">Case Studies</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Practice Area</h3>
                                </div>
                                <ul>
                                    {Practices.map((practice, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Subscribe Newsletter</h3>
                                </div>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Your Email Address..."
                                            required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>Copyright &copy; 2026 <Link onClick={ClickHandler} to="/">Avukat</Link>. All rights reserved.</li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/privacy">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/terms">Terms</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;