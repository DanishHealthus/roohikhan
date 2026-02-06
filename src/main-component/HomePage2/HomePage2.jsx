import React, { Fragment } from 'react';
import Hero2 from '../../components/hero2';
import Features from '../../components/Features';
import About2 from '../../components/about2/about2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice2 from '../../components/PracticeS2';
import Footer from '../../components/footer/Footer';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import FunFact from '../../components/FunFact';
import Attorney from '../../components/attorneys';
import Consultinencey2 from '../../components/Consultinencey2/Consultinencey2';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} topbarClass={'tb-block'}  />
            <Hero2 />
            <Features />
            <About2 />
            <Practice2 />
            <Testimonial2 />
            <CaseStudies />
            <FunFact />
            <Attorney />
            <Consultinencey2 />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;