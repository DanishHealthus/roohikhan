import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CaseStudies2 from '../../components/CaseStudies2/CaseStudies2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const CasePageS2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Case Stadies'} pagesub={'Resent Case Studies'}/> 
            <CaseStudies2 cClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePageS2;

