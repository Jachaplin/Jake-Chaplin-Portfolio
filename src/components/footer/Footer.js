import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer" data-background-color="black">
        <div className="container">
          
          <ul className="pull-center">
            <li>
              <p style={{fontSize: '12px'}}>&copy; {new Date().getFullYear()} Jake Chaplin</p>
            </li>
            
          </ul>
          <ul className="social-buttons pull-right">
            <li>
              <a href="https://twitter.com/CreativeTim" className="btn btn-icon btn-link btn-neutral">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CreativeTim" className="btn btn-icon btn-neutral btn-link">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/CreativeTimOfficial" className="btn btn-icon btn-neutral btn-link">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>

			</div>
		);
	}
}

export default Footer;
