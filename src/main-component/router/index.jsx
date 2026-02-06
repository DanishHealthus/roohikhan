import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import AboutPage from '../AboutPage/AboutPage';
import AttorneysPage from '../AttorneysPage/AttorneysPage';
import AttorneySinglePage from '../AttorneySinglePage/AttorneySinglePage';
import CasePage from '../CasePage/CasePage';
import CasePageS2 from '../CasePageS2/CasePageS2';
import CasePageS3 from '../CasePageS3/CasePageS3';
import CaseSinglePage from '../CaseSinglePage/CaseSinglePage';
import PracticePage from '../PracticePage/PracticePage';
import PracticePageS2 from '../PracticePageS2/PracticePageS2';
import PracticePageS3 from '../PracticePageS3/PracticePageS3';
import PracticeSinglePage from '../PracticeSinglePage/PracticeSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import FaqPage from '../FaqPage';
import TermPage from '../TermPage/TermPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home2" element={<HomePage2 />} />
          <Route path="home3" element={<HomePage3 />} />
          <Route path="home4" element={<HomePage4 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="attorneys" element={<AttorneysPage />} />
          <Route path="attorneys-single/:slug" element={<AttorneySinglePage />} />
          <Route path="case" element={<CasePage />} />
          <Route path="case-s2" element={<CasePageS2 />} />
          <Route path="case-s3" element={<CasePageS3 />} />
          <Route path="case-single/:slug" element={<CaseSinglePage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="practice-s2" element={<PracticePageS2 />} />
          <Route path="practice-s3" element={<PracticePageS3 />} />
          <Route path="practice-single/:slug" element={<PracticeSinglePage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path="terms" element={<TermPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='order_received' element={<OrderRecived/>} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
