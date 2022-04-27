
const ContactForm=()=>{
    
    
    const check = () => {
        if (!localStorage.getItem('user')) {
          alert("Please Login first")
          return
        }
        else {
          alert("Sent Successfully")
        }
    
      }
    return (
        <div className="contact-form container-well ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div>
            <form >
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-12 text-center">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" onClick={()=>check()} className="site-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    )


}
export default ContactForm;
