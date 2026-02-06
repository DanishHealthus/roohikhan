import React from 'react'
import { Link } from 'react-router-dom'
import Cases from '../../api/case';

const CaseStudies2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={`wpo-case-section-s2 ${props.cClass}`}>
            <div className="container">
                <div className="wpo-case-wrap">
                    <div className="sortable-gallery">
                        <div className="wpo-section-title-s2">
                            <span>Here Our Best Work</span>
                            <h2>Our Resent Case Studies</h2>
                        </div>
                        <div className="case-grids gallery-container clearfix">
                            {Cases.slice(4, 10).map((cases, i) => (
                                <div className="grid" key={i}>
                                    <div className="img-holder">
                                        <img src={cases.cImg} alt="" />
                                        <div className="hover-content">
                                            <Link className="theme-btn-s2" onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudies2;