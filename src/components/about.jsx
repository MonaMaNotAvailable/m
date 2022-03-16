import React, { Component } from 'react'

export default class About extends Component {
  render() {
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
                    <p>It's my honor to join Tufts University for the computer science graduate program starting in fall 2022. I want to be a software engineer or a data scientist : )</p>
                    <p>I am interested in financial technology(FinTech), data analysis, predictive models, machine learning, natural language processing(NLP), signal processing, and most importantly financial independence. I devoted to find the overlaps between math and computer science. </p>
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
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">My expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>I have experience training NLP models including BERT, NLTK, SpaCy. I completed school projects using TensorFlow, Keras, PyTorch. I am familiar with NumPy, Pandas, Scikit-learn. My primary language is Python.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back End & Data Analysis</h3>
                    <p>I am proficient in SQL. I have experience using Microsoft Azure Databricks with Apache Spark (pySpark). I am learning MongoDB and AWS. I am familiar with Power BI and Excel. I am a MATLAB expert.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I just learnt JavaScript, React, HTML, and CSS to build this portfolio! I am familiar with Git and I will be posting more projects on Github over the summer.</p>
                </div>
                </div>
            </div>
            {}
            </div>
        </div>
        </section>
      </div>
    )
  }
}