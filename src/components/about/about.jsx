import React from 'react'
import abimg2 from '../../images/about/about4.jpg'


const About = (props) => {
    return (
        <section className={`wpo-about-section-s3 section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-section-title-s2">
                    <span>About Us</span>
                    <h2>Why Clients Choose Us?</h2>
                </div>
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
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
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt="" />
                                <div className="about-img-inner">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visible-text">
                        <h2>About</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;