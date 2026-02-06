import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Attorneys from '../../api/attorneys'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const Attorney = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-team-section section-padding pt-0">
            <div className="container">
                <div className="wpo-team-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="wpo-section-title">
                                <span>Qualified Attorneys</span>
                                <h2>Meet Our Experts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-team-active">
                        <Slider {...settings}>
                            {Attorneys.map((attorney, aitem) => (
                                <div className="wpo-team-item" key={aitem}>
                                    <div className="wpo-team-img">
                                        <img src={attorney.AtImg} alt="" />
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2><Link onClick={ClickHandler} to={`/attorneys-single/${attorney.slug}`}>{attorney.name}</Link></h2>
                                        <span>{attorney.title}</span>
                                        <div className="social">
                                            <ul>
                                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className={`visible-text s2 ${props.vClass}`}>
                        <h2>Attorneys</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Attorney;
