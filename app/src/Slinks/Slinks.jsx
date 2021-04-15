import React from 'react';
import Heading from '../Heading';
import "./Css.css";

const Data = [
  {
    id: "0",
    portal: "LinkedIn",
    link: "https://in.linkedin.com/company/bagcampus",
  },
  {
    id: "1",
    portal: "Github",
    link: "https://github.com/bagcampus/",
  },
  {
    id: "2",
    portal: "Medium",
    link: "https://medium.com/bagcampus",
  },
  {
    id: "3",
    portal: "AngelList",
    link: "https://angel.co/company/bagcampus",
  },
  {
    id: "4",
    portal: "Facebook",
    link: "https://www.facebook.com/Bagcampus-101950538467707/",
  },
  {
    id: "5",
    portal: "Twitter",
    link: "https://twitter.com/Bagcampus1",
  },
];

const SData = (props) => {
  return (
    <>
      <div
        class="col-md-6 aos-init aos-animate mt-4"
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        <div class="Social-box d-flex align-items-center">
          <i class="fa fa-check"></i>
          <h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.portal}
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

const Slinks = () => {
  return (
    <>
      <section id="Social" className="Social">
        <div className="container">
          <div class="row">
            <Heading title="Find Us On Following Platforms" />
            <div class="col-lg-6">
              <img
                src="Assets/undraw_Social_life_re_x7t5.svg"
                class="img-fluid social-icon"
                alt="Social Media Link"
              />
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                {SData(Data[0])}
                {SData(Data[1])}
                {SData(Data[2])}
                {SData(Data[3])}
                {SData(Data[4])}
                {SData(Data[5])}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slinks