import React from 'react'
import ConsultingForm from '../ConsultingForm/ConsultingForm';

const Consultinencey2 = (props) => {
    return (
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="contact-info-wrap">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fi flaticon-001-house"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h4>Contact Info</h4>
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
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <ConsultingForm />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="wpo-contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultinencey2;