import React, { Component } from 'react';

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
                <div className="image-container image-left" style={{backgroundImage: 'url("assets/img/project4.jpg")'}}>
                  {/* First image on the left side */}
                  <p className="blockquote blockquote-primary">Short description of that part of the project....
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                {/* First image on the right side, above the article */}
                <div className="image-container image-right" style={{backgroundImage: 'url("assets/img/project21.jpg")'}}>
                </div>
                <h6 className="category text-primary">Task</h6>
                <h4 className="card-title">Title</h4>
                <p>
                  Short description of this part of the project....
                </p>
              </div>
            </div>
          </div>
          <div className="section-story-overview">
            <div className="row">
              <div className="col-md-6">
                {/* First image on the left side */}
                <div className="image-container image-left" style={{backgroundImage: 'url("assets/img/project24.jpg")'}}>
                  <p className="blockquote blockquote-primary">Short description of this part of the project....
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                {/* First image on the right side, above the article */}
                <div className="image-container image-right" style={{backgroundImage: 'url("assets/img/project23.jpg")'}}>
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
      </div>
			</div>
		);
	}
}

export default Projects;
