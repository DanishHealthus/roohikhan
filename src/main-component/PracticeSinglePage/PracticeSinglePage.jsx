import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Practices from '../../api/Practices';
import Sidebar from './Sidebar';
import FaqSection from './FaqSection';


const PracticeSinglePage = (props) => {
    const { slug } = useParams()

    const PracticeDetails = Practices.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={PracticeDetails.sTitle} pagesub={'Project'} />

            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 order-lg-2 order-1">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <img src={PracticeDetails.sImg} alt="" />
                                    <div className="wpo-service-single-content-des">
                                        <h2>{PracticeDetails.sTitle}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus morbi turpis
                                            ipsum cursus tempor elementum lacus. Mi ipsum, sed vel ultricies. Pellentesque
                                            sit tortor eu proin at commodo. Penatibus eu sed at tincidunt fermentum id nulla
                                            sed. Et nunc massa nam fringilla. In eros, proin purus, auctor arcu ultricies
                                            elit semper lobortis. Amet vel faucibus risus eget ante lectus faucibus.
                                            Bibendum vitae tortor at risus. Odio proin dictum tellus consectetur nisi egiat
                                            tellus augue orci nunc et sapien in. Neque at non vel tellus.</p>
                                        <p>Fusce etiam maecenas morbi nulla metus commodo, blandit est. Lacinia congue ipsum
                                            vitae in eget et. Eros, elit imperdiet ultrices suspendisse tellus praesent
                                            massa. Platea eros, dignissim magna consequat pellentesque. Suspendisse sed
                                            semper aenean proin gravida morbi convallis pretium velit. Sagittis risus, ut
                                            congue pellentesque posuere morbi vestibulum integer.</p>
                                    </div>
                                    <div className="rule-area">
                                        <h3>What is The Role of an Area Attorney?</h3>
                                        <p>The types of damages that can be claimed in a personal injury suit. Here is a
                                            run down of some common types of damagesPellentesque sit tortor eu proin at
                                            commodo. Penatibus eu sed at tincidunt fermentum id nulla sed. Et nunc massa
                                            nam fringilla. </p>
                                        <ul className="rules">
                                            <li>Here is a run down of some common types of damages</li>
                                            <li>Suspendisse sed semper aenean proin</li>
                                            <li>Surveying the overall capital structure of the client and assessing</li>
                                            <li>Erat ut faucibus sollicitudin viverra egestas</li>
                                            <li>Compensation for medical bills accrued</li>
                                        </ul>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><img src={PracticeDetails.ssImg1} alt="" /></li>
                                                <li><img src={PracticeDetails.ssImg2} alt="" /></li>
                                            </ul>

                                        </div>
                                        <p>Fusce etiam maecenas morbi nulla metus commodo, blandit est. Lacinia congue
                                            ipsum vitae in eget et. Eros, elit imperdiet ultrices suspendisse tellus
                                            praesent massa. Platea eros, dignissim magna consequat pellentesque.
                                            Suspendisse sed semper aenean proin gravida morbi convallis pretium velit.
                                            Sagittis risus, ut congue pellentesque posuere morbi vestibulum integer.</p>
                                    </div>
                                </div>
                                <div className="wpo-faq-section">
                                    <h2>Questions You May Wonder?</h2>
                                    <p>The types of damages that can be claimed in a personal injury suit. Here is a run down of some common types of damagesPellentesque sit tortor eu proin at commodo.</p>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="wpo-faq-item">
                                                <FaqSection/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PracticeSinglePage;
