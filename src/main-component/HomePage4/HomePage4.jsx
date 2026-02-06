import React, { Fragment } from 'react';
import Hero4 from '../../components/hero4/hero4';
import About from '../../components/about/about';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice3 from '../../components/PracticeS3/PracticeS3';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import FunFact from '../../components/FunFact';
import Consultinencey from '../../components/Consultinencey/Consultinencey';
import Attorney2 from '../../components/attorneys2/attorneys2';
import abimg from '../../images/about/about5.jpg'

const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar2/>
            <Hero4 />
            <About abClass={'wpo-about-section-s4'} abimg={abimg}/>
            <Practice3 pClass={'section-padding'}/>
            <Testimonial tClass={'light-bg pt-120"'}/>
            <CaseStudies2 cClass={'wpo-case-section-s3'}/>
            <FunFact />
            <Attorney2 tmClass={'pt-0'}/>
            <Consultinencey cnClass={'light-bg'}/>
            <BlogSection2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;