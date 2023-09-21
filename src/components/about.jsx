import React from 'react';

const Description = ({ title, description }) => {
  return (
    <div className="desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Zhifei Ma, preferred name Mona. </p>
                    <p>I am currently pursuing a master degree in computer science at Tufts University, with an expected graduation date in May 2024. My career aspirations are centered around becoming a DevOps engineer or a backend software engineer.</p>    
                    <p>I have a keen interest in cloud computing, financial technology (FinTech), blockchain technology, and data analysis. I am dedicated to discovering the synergies between these disciplines.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">My expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <Description
                  title="Back End & DevOps"
                  description="I am proficient in Python, Java, C++, and SQL. I have experience using Microsoft Azure Databricks with Apache Spark(pySpark). I have used MongoDB and AWS. I am learning Go, Kubernetes, Docker, and Envoy."
                />
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <Description
                  title="Full-stack Development"
                  description="I self-studied JavaScript, React, HTML, and CSS to build this portfolio! I recieved a summer internship offer because of this website and went through formal training in full-stack (mostly front-end) development."
                />
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <Description
                  title="Machine Learning"
                  description="I have trained NLP models using BERT, NLTK, and SpaCy. I completed school projects using TensorFlow, Keras, and PyTorch. I am familiar with NumPy, Pandas, and Scikit-learn. My primary language is Python."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;