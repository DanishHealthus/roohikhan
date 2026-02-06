import React from 'react';
import { Link } from 'react-router-dom'
import Practices from '../../api/Practices';
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'


const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Practices.map((practice, Pitem) => (
                            <li key={Pitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        <div className="posts">
                            {blogs.slice(0, 3).map((blog, Bitem) => (
                                <div className="post" key={Bitem}>
                                    <div className="img-holder">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                        <span className="date">{blog.create_at}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Fraud</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Car</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Law</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Attorney</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Lawyer</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Accident</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Criminal</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Business</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Consultation</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Immigration</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget">
                    <i className="fi flaticon-006-law"></i>
                    <span>Get Free Advice From This Case</span>
                    <h2>+0 865.369.5698</h2>
                    <a href="contact.html">Call Us 24/7</a>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
