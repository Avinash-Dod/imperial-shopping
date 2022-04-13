import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import HoverContent from "../components/hoverContent";
function About() {
    return (
        <>
            <Header />
            <BannerAbout />
            <div className="best-features about-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our Background</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="assets/images/feature-image.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h4>Who we are &amp; What we do?</h4>
                                <p>Lorem Ipsum</p>
                                <ul className="social-icons">
                                    <li><a href="# "><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="# " ><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="# "><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our Team Members</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_01.jpg" alt="" />
                <div className="hover-effect">
                  <HoverContent />
                </div>
              </div>
              <div className="down-content">
                <h4>Johnny William</h4>
                <span>CO-Founder</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_02.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li><a href="# "><i className="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>Karry Pitcher</h4>
                <span>Product Expert</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_03.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li><a href="# "><i className="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>Michael Soft</h4>
                <span>Chief Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_04.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li><a href="# "><i className="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>Mary Cool</h4>
                <span>Product Specialist</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_05.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li><a href="# "><i className="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>George Walker</h4>
                <span>Product Photographer</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_06.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li><a href="# " ><i className="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i className="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>Kate Town</h4>
                <span>General Manager</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
        </>
    )

}
export default About;