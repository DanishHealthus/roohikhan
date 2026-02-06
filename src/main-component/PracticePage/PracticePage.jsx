import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Practice2 from '../../components/PracticeS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const PracticePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <Practice2 prClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePage;

