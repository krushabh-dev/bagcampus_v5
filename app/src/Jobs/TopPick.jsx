import React from "react";
import Heading from "../Heading";
import Clist from './Clist';
import Display from './Display'
import "./TopPick.css"

function ncard(val) {
  return (
    <Display
      key={val.id}
      title={val.title}
      location={val.Location}
      ApplyLink={val.ApplyLink}
      des={val.description}
      type={val.type}
      typeTag={val.typeTag}
      hiringOrganization={val.hiringOrganization["name"]}
      logo={val.hiringOrganization["logo"]}
    />
  );
}

const TopPick = () => {
  return (
    <>
      <section id="toppickjob">
        <div className="container">
          <div className="row justify-content-center">
            <Heading
              title="Trending Jobs"
              para="Top Jobs Where You Can Apply"
            />
            {Clist.map(ncard)}
            <div class="col-12 text-center mt-4" data-aos="fade-up">
              <a href="job-page.html" class="btn btn-common">
                Browse All Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopPick;
