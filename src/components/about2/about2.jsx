import React from 'react'
import abimg from '../../images/about.jpg'


const About2 = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
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
                                    <div className="exprience">
                                        <div className="exprience-left">
                                            <h4>25</h4>
                                        </div>
                                        <div className="exprience-right">
                                            <h4>Years Of Experience</h4>
                                            <p>Adipiscing turpis feugiat lectus posuere nulla ultrices vitae. Tincidunt
                                                sed at tortor tortor magna condimentum. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visible-text">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;