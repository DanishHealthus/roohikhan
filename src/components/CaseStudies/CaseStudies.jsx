import React from 'react'
import { Link } from 'react-router-dom'
import Cases from '../../api/case';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const CaseStudies = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={`wpo-case-section ${props.csClass}`}>
            <div className="container">
                <div className="wpo-case-wrap">
                    <div className="sortable-gallery">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="wpo-section-title">
                                    <span>Here Our Best Work</span>
                                    <h2>Our Resent Case Studies</h2>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="case-btn">
                                    <Link className="theme-btn-s2" onClick={ClickHandler} to="/case">View All</Link>
                                </div>
                            </div>
                        </div>
                        <div className="case-grids gallery-container clearfix">
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                                <Masonry columnsCount={4} gutter="30px">
                                    {Cases.slice(0, 4).map((cases, i) => (
                                        <div className="grid" key={i}>
                                            <div className="img-holder">
                                                <img src={cases.cImg} alt="" />
                                                <div className="hover-content">
                                                    <Link className="theme-btn-s2" onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>

                        </div>
                    </div>
                    <div className={`visible-text ${props.vClass}`}>
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;