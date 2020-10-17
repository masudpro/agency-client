import React from 'react';

const Contact = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6 pr-lg-5 ">
                <div className="pr-xl-5"><h1 className="defaultHeading pr-lg-5 mr-xl-5">Let us handle your project, professionally.</h1></div>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
            <input type="email" name="email"  className="form-control" placeholder="Your Email Address " required />
            <input type="text" name="name"  className="form-control" placeholder="Your Name/ Email Address "  />
           
             <textarea rows="5" type="text" name="message"  className="form-control" placeholder="Your Message" required />
             <button className="themeBlueButton" >SEND </button>
            </div>
        </div>
    );
};

export default Contact;