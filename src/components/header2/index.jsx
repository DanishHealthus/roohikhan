import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useDispatch, useSelector } from "react-redux";
import { totalPrice } from "../../utils";
import { removeFromCart } from "../../store/slices/cartSlice";
import Logo from '../../images/logo.svg'
import HeaderTopbar from '../HeaderTopbar';


const Header2 = (props) => {
    const dispatch = useDispatch();

    const carts = useSelector((state) => state.cart.cart);

    const [cartActive, setcartState] = useState(false);

    const ClickHandler = () => window.scrollTo(10, 0);

    return (
        <header id="header" className="wpo-header-s4">
            <HeaderTopbar />
            <div className="wpo-site-header wpo-header-style-4">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home3">Home style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home4">Home style 4</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys">Attorneys</Link></li>
                                                <li><Link onClick={ClickHandler} to="/attorneys-single/Jacob-Jones">Attorneys single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/terms">Terms & Coditions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Practice</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/practice">Practice</Link></li>
                                                <li><Link onClick={ClickHandler} to="/practice-s2">Practice Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/practice-s3">Practice Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/practice-single/Criminal-Law">Practice Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Cases</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/case">Cases</Link></li>
                                                <li><Link onClick={ClickHandler} to="/case-s2">Cases Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/case-s3">Cases Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/case-single/Criminal-Law">Cases Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/product-single/Principles-and-Policies">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/Justice-May-For-You-If-You-Are-Innocent">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Justice-May-For-You-If-You-Are-Innocent">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Justice-May-For-You-If-You-Are-Innocent">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-cta">
                                        <Link to="/contact">
                                            <i className="fi flaticon-018-telephone-1"></i>
                                            <span className="cta-text">
                                                <span>Have any Questions?</span>
                                                <small>+0 123 456 789</small>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="mini-cart">
                                        <button
                                            className="cart-toggle-btn"
                                            onClick={() => setcartState(!cartActive)}
                                        >
                                            <i className="fi flaticon-023-shopping-cart"></i>
                                            <span className="cart-count">{carts.length}</span>
                                        </button>

                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(false)}>
                                                <i className="ti-close"></i>
                                            </button>

                                            <div className="mini-cart-items">
                                                {carts.map((catItem, crt) => (
                                                    <div className="mini-cart-item clearfix" key={crt}>
                                                        <div className="mini-cart-item-image">
                                                            <span>
                                                                <img src={catItem.proImg} alt="" />
                                                            </span>
                                                        </div>

                                                        <div className="mini-cart-item-des">
                                                            <p>{catItem.title}</p>

                                                            <span className="mini-cart-item-price">
                                                                ${catItem.price} x {catItem.qty}
                                                            </span>

                                                            <span className="mini-cart-item-quantity">
                                                                <button
                                                                    onClick={() => dispatch(removeFromCart(catItem.id))}
                                                                    className="btn btn-sm btn-danger"
                                                                >
                                                                    <i className="ti-close"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">
                                                    Subtotal: <span>${totalPrice(carts)}</span>
                                                </span>

                                                <div className="mini-btn">
                                                    <Link onClick={ClickHandler} to="/checkout" className="view-cart-btn s1">
                                                        Checkout
                                                    </Link>
                                                    <Link onClick={ClickHandler} to="/cart" className="view-cart-btn">
                                                        View Cart
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header2;