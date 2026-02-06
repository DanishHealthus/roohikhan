import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Cases from '../../api/case';
import cimg1 from '../../images/case-single/line-chart.png'
import cimg2 from '../../images/case-single/img-2.jpg'


const CaseSinglePage = (props) => {
    const { slug } = useParams()

    const caseDetails = Cases.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={caseDetails.cTitle} pagesub={'Project'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12 col-12">
                            <div className="service-content">
                                <div className="service-content-top">
                                    <h3>A Personal Injury suit can come up when someone is harmed</h3>
                                    <span>Case Study, Insurance Law , Law Firm</span>
                                </div>
                                <div className="img-holder">
                                    <img src={caseDetails.cImg} alt=""/>
                                </div>
                                <div className="case-details-wrap">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 col-12">
                                            <div className="case-details-left">
                                                <h3>Case Details</h3>
                                                <ul>
                                                    <li>Client: <span>Cameron Williamson</span></li>
                                                    <li>Attorney:<span>Darlene Robertson</span></li>
                                                    <li>Case:<span>{caseDetails.cTitle}</span></li>
                                                    <li>Case Start:<span>12/04/2026</span></li>
                                                    <li>Execution Time:<span>5 Months</span></li>
                                                    <li>Result:<span>Winner</span></li>
                                                    <li>Other:<span>Demo Content</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-12">
                                            <div className="case-details-right">
                                                <h3>Summary Of The Case Studies</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus morbi
                                                    turpis ipsum cursus tempor elementum lacus. Mi ipsum, sed vel ultricies.
                                                    Pellentesque sit tortor eu proin at commodo. Penatibus eu sed at
                                                    tincidunt fermentum id nulla sed. Et nunc massa nam fringilla. In eros,
                                                    proin purus, auctor arcu ultricies elit semper lobortis. Tristique
                                                    dignissim convallis lectus morbi faucibus. Amet vel faucibus risus eget
                                                    ante lectus faucibus. Bibendum vitae tortor at risus. Odio proin dictum
                                                    tellus consectetur nisi egiat tellus augue orci nunc et sapien in. Neque
                                                    at non vel tellus. Tellus urna sit dignissim amet. Lectus tortor at
                                                    ultricies massa tortor, hac vitae curabitur varius. </p>
                                                <p>Fusce etiam maecenas morbi nulla metus commodo, blandit est. Lacinia
                                                    congue ipsum vitae in eget et. Eros, elit imperdiet ultrices suspendisse
                                                    tellus praesent massa. Platea eros, dignissim magna consequat
                                                    pellentesque. Suspendisse sed semper aenean proin gravida morbi
                                                    convallis pretium velit. Sagittis risus, ut congue pellentesque posuere
                                                    morbi vestibulum integer. Erat ut faucibus sollicitudin viverra egestas
                                                    phasellus tristique. Nec enim tempus,placerat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-info-wrap">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 col-12">
                                            <div className="case-challenge">
                                                <h3>Challenge Of Cases</h3>
                                                <p>The types of damages that can be claimed in a personal injury suit. Here
                                                    is a run down of some common types of damages:</p>
                                                <ul>
                                                    <li>Lost wages as a result of the injury</li>
                                                    <li>Suspendisse sed semper aenean proin</li>
                                                    <li>Pain and suffering</li>
                                                    <li>Erat ut faucibus sollicitudin viverra egestas</li>
                                                    <li>Compensation for medical bills accrued</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12">
                                            <div className="case-approach">
                                                <h3>Our Approach And Solution</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus elit
                                                    dictumst purus cras etiam neque. Varius augue sollicitudin et proin
                                                    elementum sed est orci. Mi aliquet neque dis elit feugiat sed. Ultrices
                                                    sit diam viverra blandit volutpat mauris. Vitae vestibulum ipsum porta
                                                    auctor orci. Tortor nec libero magna cursus urna rhoncus. Egestas eu
                                                    eget sed amet aliquet. Tincidunt feugiat pretium varius semper sodales
                                                    integer. Habitant faucibus quis tempus, amet, in nisl in neque,
                                                    neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12">
                                            <div className="case-result">
                                                <h3>Final Result</h3>
                                                <img src={cimg1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-attorney">
                                    <h3>Attorney In This Case:</h3>
                                    <div className="case-attorney-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="case-attorney-img">
                                                    <img src={cimg2} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="case-text">
                                                    <h4>Darlene Robertson</h4>
                                                    <span>Lawyer, Consultant</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna andient
                                                        accumsan et nunc euoro vel dignissim. Eleifend elit, proin aliquet
                                                        gravida eleifend aenean blandit commodo. Ut lobortis neque turpis
                                                        quis. Massa ut elementum dui nisl vehicula platea sem. Quam
                                                        scelerisque leo in volutpat, consequat. Morbi donec sit tortor
                                                        sagittis. Enim a sed pellentesque nisi, lacus, fringilla lacus porta
                                                        eros amet platea iaculis ferntum.</p>
                                                    <Link onClick={ClickHandler} to="/attorneys-single/Robert-Fox">More About <i
                                                        className="fi flaticon-031-right-arrow-1"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-case-section-s3">
                                    <h3>Resent Case Studies</h3>
                                    <div className="wpo-case-wrap">
                                        <div className="sortable-gallery">
                                            <div className="case-grids gallery-container clearfix">
                                                {Cases.slice(4, 7).map((cases, i) => (
                                                    <div className="grid" key={i}>
                                                        <div className="img-holder">
                                                            <img src={cases.cImg} alt="" />
                                                            <div className="hover-content">
                                                                <Link className="theme-btn-s2" onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CaseSinglePage;
