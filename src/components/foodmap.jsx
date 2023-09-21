import React, { Component } from 'react'

export default class Foodmap extends Component {
    render() {
      return (
        <div>
          <section className="colorlib-foodmap" data-section="foodmap">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="foodmap-desc">
                      <span className="heading-meta">My Collection</span>
                      <p>Check out my favorite restaurants on <a href="https://maps.app.goo.gl/vK4h15qBNuSkyrbq7">Google Maps</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
        
      );
    }
}