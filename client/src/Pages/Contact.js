import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/Socialicons";
import BannerContact from "../components/BannerContact";
import Map from "../components/Map";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <>
      <Header />
      <BannerContact />
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>

              </div>
            </div>
            <div className="col-md-8">
              <Map />
            </div>
            <div className="left-content">
              <h4>About Our Office</h4>
              <p>Lorem Ipsum</p>
              <SocialIcons />
            </div>

          </div>
          <div className="Contact-form">
            <ContactForm />
          </div>
        </div>



      </div>
      <Footer />
    </>


  )
}
export default Contact;