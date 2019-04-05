import React, { Component } from 'react';
import projectImg1 from '../../images/tavius-dot-org-landing.png'
import projectImg2 from '../../images/tavius-dot-org-music.png'
import projectImg3 from '../../images/tavius-dot-org-blog.png'
import projectImg4 from '../../images/tavius-dot-org-store.png'

class Projects extends Component {
	render() {
		return (
			<div>
				<div className="projects-3" data-background-color="black">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h6 className="category text-muted">Projects</h6>
              <h2 className="title">Tavius Dot Org</h2>
            </div>
          </div>
          <div className="section-story-overview">
            <div className="row">
              <div className="col-md-6">
                <div className="image-container image-left" style={{backgroundImage: `url(${projectImg1})`}}>
                  {/* First image on the left side */}
                  <p className="blockquote blockquote-primary">Built front end using React with reusable components
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                {/* First image on the right side, above the article */}
                <div className="image-container image-right" style={{backgroundImage: `url(${projectImg2})`}}>
                </div>
                <h6 className="category text-primary">Task</h6>
                <h4 className="card-title">Title</h4>
                <p>
                  Utilized Bootstrap and various animation NPM packages to optimize the UI/UX

                </p>
              </div>
            </div>
          </div>
          <div className="section-story-overview">
            <div className="row">
              <div className="col-md-6">
                {/* First image on the left side */}
                <div className="image-container image-left" style={{backgroundImage: `url(${projectImg3})`}}>
                  <p className="blockquote blockquote-primary">Short description of this part of the project....
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                {/* First image on the right side, above the article */}
                <div className="image-container image-right" style={{backgroundImage: `url(${projectImg4})`}}>
                </div>
                <h6 className="category text-primary">Task</h6>
                <h4 className="card-title">Title</h4>
                <p>
                  Short description of this part of the project....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ml-auto mr-auto">
        <div className="card card-background card-raised" data-background-color style={{backgroundImage: `url(${projectImg1})`}}>
          <div className="info">
            <div className="icon icon-white">
              <i className="now-ui-icons business_bulb-63" />
            </div>
            <div className="description">
              <h4 className="info-title">Live Demo</h4>
              <a target="_blank" href="https://www.tavius.org" className="btn btn-primary btn-round">View Project</a>
            </div>
          </div>
        </div>
      </div>
      </div>
			</div>
		);
	}
}

export default Projects;
