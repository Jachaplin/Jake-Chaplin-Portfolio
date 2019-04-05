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
              <h4 className="description">Being a Full Stack Developer allows me to maximize projects and helps me see the big picture for each project. My background as a Sound Engineer/Music Producer gave me lots of valuable tools for working with clients directly and the ability to anticipate their creative needs. Having this technical and creative background, along with the ability to work with clients, helped me tremendously with transitioning to web development. Completing UC Berkeley’s coding program and learning multiple programming languages gave me a great foundation as a programmer to deliver quality results for my clients.</h4>
            </div>
          </div>
          <hr style={{marginTop: '60px'}} />
          <h2 style={{marginTop: '60px', marginBottom: '-30px'}} className="title">Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons education_atom" />
                </div>
                <h4 className="info-title">Front End</h4>
                <p className="description">
                
                  <p>
                    React
                  </p>
                  <p>
                    Redux
                  </p>
                  <p>
                    JavaScript
                  </p>
                  <p>
                    ES6+
                  </p>
                  <p>
                    HTML5
                  </p>
                  
                  <p>
                    CSS3
                  </p>
                  <p>
                    LESS
                  </p>
                  <p>
                    Bootstrap
                  </p>
                  <p>
                    Foundation
                  </p>
                
                
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-success icon-circle">
                  <i className="now-ui-icons objects_globe" />
                </div>
                <h4 className="info-title">Back End</h4>
                <p className="description">
                  <p>
                    Node.js
                  </p>
                  <p>
                    Express.js
                  </p>
                  <p>
                    RESTful API integration
                  </p>
                  <p>
                    3rd Party API integration
                  </p>
                  
                  <p>
                    Passport
                  </p>
                  <p>
                    MongoDB
                  </p>
                  <p>
                    Mongoose
                  </p>
                  <p>
                    Firebase
                  </p>
                  <p>
                    MySQL
                  </p>
                  
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-hover">
                <div className="icon icon-primary icon-circle">
                  <i className="now-ui-icons tech_watch-time" />
                </div>
                <h4 className="info-title">Other</h4>
                <p className="description">
                  <p>
                    Git
                  </p>
                  <p>
                    Postman
                  </p>
                  <p>
                    Jest
                  </p>
                  <p>
                    Photoshop
                  </p>
                  <p>
                    Working Directly with Clients
                  </p>
                  <p>
                    Time Management
                  </p>
                  <p>
                    Meeting Deadlines
                  </p>
                  <p>
                    Comunication Skills
                  </p>
                  <p>
                    Working in Collaborative Environments
                  </p>
                </p>
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
                  
