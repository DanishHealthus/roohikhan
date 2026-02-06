import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Practice from '../../components/Practice';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const PracticePageS2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <Practice prClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePageS2;

