import React from 'react';
import { Link } from 'react-router-dom'
import Practices from '../../api/Practices';

const Sidebar = () => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8 order-lg-1 order-2">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>Practice Area</h2>
                    <ul>
                        {Practices.map((practice, Pitem) => (
                            <li key={Pitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-service-widget widget">
                    <h2>Our Attorneys</h2>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/">Brooklyn Simmons</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Leslie Alexander</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Jenny Wilson</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Robert Fox</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Savannah Nguyen</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Ralph Edwards</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Darlene Robertson</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Jerome Bell</Link></li>
                    </ul>
                </div>

                <div className="wpo-contact-widget">
                    <i className="fi flaticon-006-law"></i>
                    <span>Get Free Advice From This Case</span>
                    <h2>+0 865.369.5698</h2>
                    <Link onClick={ClickHandler} to="/contact">Call Us 24/7</Link>
                </div>
            </div>
        </div>
    )
};
export default Sidebar;

