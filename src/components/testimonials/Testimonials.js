import React, { Component } from 'react';
import Tavius from '../../images/tavius-headshot.jpeg'
import Background from '../../images/bg19.jpg'

class Testimonials extends Component {
	render() {
		return (
			<div>
				<div className="testimonials-1 section-image" style={{backgroundImage: `url(${Background})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <h2 className="title">Testimonials</h2>
              <h4 className="description ">Hear what my clients have to say</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="card card-testimonial">
                <div className="card-avatar">
                  <a href="#pablo">
                    <img className="img img-raised" src={Tavius} />
                  </a>
                </div>
                <div className="card-body">
                  <p className="card-description" style={{textAlign: 'left'}}>
                    Super stoked about my new website www.tavius.org! I have had this website over a decade and it has never been so clean and beautiful. I was able to integrate my social media posts to automatically update my website blog when I wanted. Social media integration with a professional website is so much better! I also was able to integrate my different vendors for my eCommerce business into my website. This makes selling easier.

Working with Jake was easy. He is creative, and worked really hard putting in the extra effort to dial it all in. I am looking to him to help me with another professional website for a nonprofit,hopefully, soon. I definitely recommend Jake for website work. He is passionate and cares deeply about the quality of his work.
                  </p>
                </div>
                <div className="icon icon-primary">
                  <i className="fa fa-quote-right" />
                </div>
                <div className="card-footer">
                  <h4 className="card-title">Tavius Aiton</h4>
                  <p className="category">Audio, Video, Acoustics, and Lighting Systems Integration</p>
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

export default Testimonials;
