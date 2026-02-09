import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice from '../../components/Practice';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import FunFact from '../../components/FunFact';
import Attorney from '../../components/attorneys';
import Consultinencey from '../../components/Consultinencey/Consultinencey';
import abimg from '../../images/about/about3.jpg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} topbarNone={'topbar-none'} />
            <Hero />
            <About abimg={abimg}/>
            <Practice />
            <Testimonial />
            {/* <CaseStudies vClass={'d-none'}/> */}
            <FunFact />
            <Attorney vClass={'d-none'}/>
            <Consultinencey />
            <BlogSection vClass={'d-none'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;