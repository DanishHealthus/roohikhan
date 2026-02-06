import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Attorney2 from '../../components/attorneys2/attorneys2';

const AttorneysPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={'Our Attorneys'} pagesub={'Attorneys'} />
            <Attorney2 tmClass={'light-bg s2'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AttorneysPage;
