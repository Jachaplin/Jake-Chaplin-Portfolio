import React, { Component } from 'react';
import ProfilePic from '../../images/Jake-Chaplin-Head-Shot-Sm.jpg'

class About extends Component {
	render() {
		return (
			<div>
				<div className="features-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="photo-container">
			          <img src={ProfilePic} style={{width: '150px', height: 'auto'}} alt="Thumbnail Image" className="rounded-circle img-raised" />
			        </div>
              <h2 className="title">About Me</h2>
              <h4 className="description">A short paragraph about stuff and stuff....</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons education_atom" />
                </div>
                <h4 className="info-title">Front End</h4>
                <p className="description">React.....</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-success icon-circle">
                  <i className="now-ui-icons objects_globe" />
                </div>
                <h4 className="info-title">Back End</h4>
                <p className="description">Node.js...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-primary icon-circle">
                  <i className="now-ui-icons tech_watch-time" />
                </div>
                <h4 className="info-title">Other</h4>
                <p className="description">Git...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
			</div>
		);
	}
}

export default About;
