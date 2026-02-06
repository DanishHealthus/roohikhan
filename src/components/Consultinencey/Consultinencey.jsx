import React from 'react'
import ConsultingForm from '../ConsultingForm/ConsultingForm';

const Consultinencey = (props) => {
    return (
        <section className={`wpo-contact-section-s2 section-padding ${props.cnClass}`}>
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row justify-content-center">
                        <div className="col col-xl-5 col-lg-6">
                            <div className="contact-info-wrap">
                                <div className="contact-info-title">
                                    <h3>Contact Info</h3>
                                    <p>Amet turpis urna malesuada sed augue ut. Orci neque elit massa semper turpis vel. Enim tortor at hac quis odio. Quam nulla gravida sit gravida vitae fermentum parturient.</p>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fi flaticon-001-house"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h4>Office Address</h4>
                                        <p>244 Royal Ln. Mesa, New Jersey </p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fi flaticon-002-open"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h4>Email Address</h4>
                                        <p>justuprodemo@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fi flaticon-003-headphone"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h4>Phone</h4>
                                        <p>(684) 555-0102</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fi flaticon-004-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h4>Office Hour</h4>
                                        <p>Mon-Sun: 10am – 7pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="form-title">
                                    <span>Contact Us</span>
                                    <h3>Free Consulting</h3>
                                </div>
                                <ConsultingForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultinencey;