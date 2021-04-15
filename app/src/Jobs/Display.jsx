import React from "react";

const Display = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up">
        <div className="job-featured">
          <div className="icon">
            <img src={props.logo} class="img-fluid"  alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="job-details.html">{props.title}</a>
            </h3>
            <p className="brand">{props.hiringOrganization}</p>
            <div className="tags">
              <span>
                <i className="lni-map-marker"></i> {props.location}
              </span>
            </div>
            <div className="row">
              <span className={props.typeTag}>{props.type}</span>
              <a href={props.ApplyLink} target="_blank" rel="noreferrer">
                <span className="apply-btn ml-1">Apply</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Display;
