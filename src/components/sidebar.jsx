import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(https://github.com/MonaMaNotAvailable/monarox/blob/master/public/images/cover_version1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Zhifei Ma</a></h1>
              <span className="email"><i className="icon-mail"></i> zma4@wpi.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  {/*<li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#foodmap" data-nav-section="foodmap">Foodmap</a></li>*/}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/zhifei-mona-ma-6095/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/MonaMaNotAvailable" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/monama320/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              Thank you for visiting my portfolio!!!
              Thanks <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">bdarochiya</a> for inspiration 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
