import React, { Component } from 'react';
import Background from '../../images/bg21.jpg'
class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll={500}>
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="http://demos.creative-tim.com/marketplace/now-ui-kit-pro/presentation.html" rel="tooltip" title="This website was created using React" data-placement="bottom">
              Jake Chaplin <span style={{ marginLeft: '5px', marginRight: '5px'}}> | </span> Web Developer
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div className="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
          <a className="nav-link" href="#pablo">
            <i className="fa fa-facebook-square" />
            <p>About</p>
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#pablo">
            <i className="fa fa-instagram" />
            <p>Projects</p>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pablo">
            <i className="fa fa-instagram" />
            <p>Testimonials</p>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pablo">
            <i className="fa fa-instagram" />
            <p>Contact</p>
          </a>
        </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-header page-header-small">
            <div className="page-header-image" data-parallax="true" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <div className="content-center">
        
        <h1 className="title" style={{fontSize: '80px'}}>Jake Chaplin</h1>
        <h3 className="category">Full Stack Developer</h3>
            </div>
        </div>
			</div>
		);
	}
}

export default Navbar;
