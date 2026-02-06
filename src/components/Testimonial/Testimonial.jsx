import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'

import tright from '../../images/testimonial/r-img.jpg'


const Testimonial = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const testimonial = [
        {
            tsImg: ts1,
            Des: "“Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.”",
            Title: 'Milani Harverd',
            Sub: "CEO Of GRK Egency",
        },
        {
            tsImg: ts2,
            Des: "“Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.”",
            Title: 'Aliza Anney',
            Sub: "Model Belarus",
        },
        {
            tsImg: ts3,
            Des: "“Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.”",
            Title: 'David Miller',
            Sub: "Designer UK",
        }
    ]
    return (

        <section className={`wpo-testimonials-section-s2 section-padding ${props.tClass}`}>
            <div className="container">
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-testimonials-active">
                                <Slider {...settings}>
                                    {testimonial.map((tesmnl, tsm) => (
                                        <div className="wpo-testimonials-item" key={tsm}>
                                            <p>{tesmnl.Des}</p>
                                            <div className="wpo-testimonial-info">
                                                <div className="wpo-testimonial-info-img">
                                                    <img src={tesmnl.tsImg} alt="" />
                                                </div>
                                                <div className="wpo-testimonial-info-text">
                                                    <h5>{tesmnl.Title}</h5>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={tright} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;