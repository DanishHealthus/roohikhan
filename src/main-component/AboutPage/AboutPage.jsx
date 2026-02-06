import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Practice3 from '../../components/PracticeS3/PracticeS3';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import FunFact from '../../components/FunFact';
import Attorney2 from '../../components/attorneys2/attorneys2';
import abimg from '../../images/about/about5.jpg'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About abClass={'wpo-about-section-s4'} abimg={abimg}/>
            <Practice3 pClass={'section-padding'}/>
            <Testimonial tClass={'light-bg pt-120"'}/>
            <CaseStudies2 cClass={'wpo-case-section-s3'}/>
            <FunFact />
            <Attorney2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
