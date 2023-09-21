import React from 'react';

const TimelineEntry = ({ iconColor, iconName, title, date, description }) => {
  return (
    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
      <div className="timeline-entry-inner">
        <div className={`timeline-icon ${iconColor}`}>
          <i className={iconName} />
        </div>
        <div className="timeline-label">
          <h2>{title} <span>{date}</span></h2>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

const Education = () => {
  return (
    <div>
      <section className="colorlib-experience" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">highlights</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <TimelineEntry
                  iconColor="color-4"
                  iconName="icon-pen2"
                  title="Tufts University: Master of Science"
                  date="Sep 2022 - May 2024"
                  description="I am pursuing a graduate degree in computer science at Tufts, with a concentration on debugging cloud computing. I got elected to be the International Committee Chair for Graduate Student Council. I joined the Tufts k-pop dance group (KoDA)."
                />
                <TimelineEntry
                  iconColor="color-6"
                  iconName="icon-pen2"
                  title="Worcester Polytechnic Institute (WPI): Bachelor of Science"
                  date="Aug 2018 - Dec 2021"
                  description="I double major in math and computer science. I am dedicated to the international student community. I joined the WPI k-pop dance group (KGM), ultimate frisbee team, and choir. I became a member of Upsilon Pi Epsilon (computer science honor society) in my junior year."
                />
                <TimelineEntry
                  iconColor="color-3"
                  iconName="icon-pen2"
                  title="Beijing 101 Middle School: International Department (101ID)"
                  date="Sep 2015 - May 2018"
                  description="I came from Beijing, China, and prepared to study abroad during high school by taking 7 AP courses, 5 TOEFL exams, and the SAT three times."
                />
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;