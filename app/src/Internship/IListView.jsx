import React from 'react';

const ListItem = () => {
  return (
    <>
      <a className="job-listings" href="job-details.html">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="job-company-logo">
              <img src="assets/img/features/img1.png" alt="" />
            </div>
            <div className="job-details">
              <h3>App Developer</h3>
              <span className="company-neme">AmazeSoft</span>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-xs-12 text-center">
            <span className="btn-open">7 Open Jobs</span>
          </div>
          <div className="col-lg-2 col-md-2 col-xs-12 text-right">
            <div className="location">
              <i className="lni-map-marker"></i> New Yourk, US
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-xs-12 text-right">
            <span className="btn-full-time">Full Time</span>
          </div>
          <div className="col-lg-2 col-md-2 col-xs-12 text-right">
            <span className="btn-apply">Apply Now</span>
          </div>
        </div>
      </a>
    </>
  );
}

const IListView = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">{ListItem}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IListView