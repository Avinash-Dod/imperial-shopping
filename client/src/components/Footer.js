import SocialIcons from "./Socialicons";
const date = new Date().getFullYear().toString()
function Footer() {
    return (
        <>
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <a href="/" className="heading"><h2><i className="fa fa-shopping-cart" aria-hidden="true"></i> Imperial <em>Shopping</em></h2></a>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href=" ">About Our Shop</a></li>
                                    <li><a href=" ">Secure Shopping</a></li>
                                    <li><a href=" ">Delivery infomation</a></li>
                                    <li><a href=" ">Privacy Policy</a></li>
                                    <li><a href=" ">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href=" ">Who We Are</a></li>
                                    <li><a href=" ">Our Services</a></li>
                                    <li><a href=" ">Projects</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href=" ">Innovation</a></li>
                                    <li><a href=" ">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Follow Us Here</h6>
                                <p>Get updates about our latest shop and special offers.</p>

                            </div>
                            <SocialIcons />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" inner-content">
                                <div className="footer__copyright__text"><p>
                                    Copyright &copy; {date} All rights reserved | <i className="fa fa-shopping-cart" aria-hidden="true"></i> IMPERIAL SHOPPING

                                </p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;