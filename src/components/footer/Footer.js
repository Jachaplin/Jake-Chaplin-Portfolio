import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer footer-big" data-background-color="black">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-2">
                <h5>About Us</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo" className="text-muted">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Market</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo" className="text-muted">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Transactions Issues
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-muted">
                      Affiliates Program
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Social Feed</h5>
                <div className="social-feed">
                  <div className="feed-line">
                    <i className="fa fa-twitter" />
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div className="feed-line">
                    <i className="fa fa-twitter" />
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div className="feed-line">
                    <i className="fa fa-facebook-square" />
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="social-buttons">
                  <li>
                    <a href="#pablo" className="btn btn-icon btn-neutral btn-twitter btn-round">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-icon btn-neutral btn-facebook btn-round">
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-icon btn-neutral btn-dribbble btn-round">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-icon btn-neutral btn-google btn-round">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-icon btn-neutral btn-instagram btn-round">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <h5>
                  <small>Numbers Don't Lie</small>
                </h5>
                <h5>14.521
                  <small className="text-muted">Freelancers</small>
                </h5>
                <h5>1.423.183
                  <small className="text-muted">Transactions</small>
                </h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            Copyright ©
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
			</div>
		);
	}
}

export default Footer;
