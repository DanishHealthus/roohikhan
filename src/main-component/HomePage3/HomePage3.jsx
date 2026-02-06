import React, { Fragment } from 'react';
import Hero3 from '../../components/hero3/hero3';
import About3 from '../../components/about3/about3';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice3 from '../../components/PracticeS3/PracticeS3';
import Footer from '../../components/footer/Footer';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import FunFact from '../../components/FunFact';
import Consultinencey from '../../components/Consultinencey/Consultinencey';
import Attorney2 from '../../components/attorneys2/attorneys2';

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarClass={'tb-none'}  />
            <Hero3 />
            <About3 />
            <Practice3 pClass={'pb-0'}/>
            <Testimonial2 />
            <CaseStudies2 />
            <FunFact />
            <Attorney2 />
            <Consultinencey />
            <BlogSection2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;