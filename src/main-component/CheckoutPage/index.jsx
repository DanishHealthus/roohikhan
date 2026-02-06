import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useSelector } from "react-redux";
import Footer from '../../components/footer/Footer';

const CheckoutPage =() => {

    const cartList = useSelector((state) => state.cart.cart);

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CheckoutPage;
