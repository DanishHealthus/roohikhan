import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'


const Hero2 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-3">
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                speed={1800}
                parallax
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="sub-title">
                                    <span>Best Lawer Egency</span>
                                </div>
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Creative solutions for legal problems</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque
                                        mauris
                                        malesuada dui. Tortor, sit nulla odio enim neque. Enim erat augue id massa
                                        ultrices
                                        ut
                                        orci.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link to="/about" className="theme-btn-s2">Explore more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="sub-title">
                                    <span>Best Lawer Egency</span>
                                </div>
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Creative solutions for legal problems</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Bibendum commodo nulla id amet magna sit malesada. Et sceleque scelerisque
                                        mauris
                                        malesuada dui. Tortor, sit nulla odio enim neque. Enim erat augue id massa
                                        ultrices
                                        ut
                                        orci.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link to="/about" className="theme-btn-s2">Explore more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero2;