import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="main" style={{marginTop: '30px', marginBottom: '30px'}}>
        <div className="contact-content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 ml-auto mr-auto">
                <h2 className="title">Send me a message</h2>
                <p className="description">You can contact me with anything related to my services. I'll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form role="form" id="contact-form" method="post">
                  <label>Your name</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="now-ui-icons users_circle-08" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Your Name..." aria-label="Your Name..." />
                  </div>
                  <label>Email address</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="now-ui-icons ui-1_email-85" /></span>
                    </div>
                    <input type="email" className="form-control" placeholder="Email Here..." aria-label="Email Here..." />
                  </div>
                  <label>Phone</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="now-ui-icons tech_mobile" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Number Here..." />
                  </div>
                  <div className="form-group">
                    <label>Your message</label>
                    <textarea name="message" className="form-control" id="message" rows={6} defaultValue={""} />
                  </div>
                  <div className="submit text-center">
                    <input type="submit" className="btn btn-primary btn-raised btn-round" defaultValue="Contact Us" />
                  </div>
                </form>
              </div>
              <div className="col-md-5 ml-auto mr-auto">
                <div className="info info-horizontal mt-5">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons location_pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Download my resume</h4>
                    
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons tech_mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give me a ring</h4>
                    <p> Jake Chaplin
                      <br /> 408 656 0312
                      <br /> 
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
			</div>
		);
	}
}

export default Contact;
