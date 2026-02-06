import React from 'react'
import abimg from '../../images/about/about2.jpg'


const About3 = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="wpo-section-title-s2">
                    <span>About Us</span>
                    <h2>Why Clients Choose Us?</h2>
                </div>
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="specialization-wrap">
                                <h2>Our Specialization</h2>
                                <div className="specialization-item">
                                    <div className="specialization-icon"><i className="fi flaticon-005-trophy"></i></div>
                                    <div className="specialization-text">
                                        <span>10 Years</span>
                                        <h4>Winning Award</h4>
                                    </div>
                                </div>
                                <div className="specialization-item">
                                    <div className="specialization-icon"><i className="fi flaticon-008-advocate"></i></div>
                                    <div className="specialization-text">
                                        <span>120+</span>
                                        <h4>Skilled Attorneys</h4>
                                    </div>
                                </div>
                                <div className="specialization-item">
                                    <div className="specialization-icon"><i className="fi flaticon-006-law"></i></div>
                                    <div className="specialization-text">
                                        <span>99%</span>
                                        <h4>Case Win</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <h2>We Are The Most Populer Law Firm That Can Help You Perfectly!</h2>
                                <div className="wpo-about-content-inner">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tincidunt nullam
                                        ridiculus at nec mattis consequat cursus et. Maecenas euismod quis et nunc dolor
                                        enim nisl. Turpis vel, laoreet at id massa id elementum feugiat molestie.
                                        Adipiscing turpis feugiat lectus posuere nulla ultrices vitae. </p>
                                    <p>Lectus erat at risus quam sodales gravida interdum. Nec non posuere lacus
                                        pharetra arcu lectus congue amet. Feugiat vel at senectus mattis urna nunc
                                        fusce. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;