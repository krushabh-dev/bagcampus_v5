import React from "react";
import Heading from "../Heading";
import "./Process.css";

const processes = [
  {
    icon: "fas fa-users",
    title: "Create Your Account",
    ptag: "Lorem Ipsum",
    color: "primatry",
  },
  {
    icon: "fas fa-search",
    title: "Search Opportunity",
    ptag: "Lorem Ipsum",
    color: "primatry",
  },
  {
    icon: "fas fa-award",
    title: "Apply!",
    ptag: "Lorem Ipsum",
    color: "primatry",
  },
];

const Process_Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-body work-process step-3 justify-content-center text-center">
            <span className="process-icon">
              <i className={props.icon}></i>
            </span>
            <h4>{props.title}</h4>
            <p>{props.ptag}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Process = (props) => {
  return (
    <>
      <section id="process">
        <div className="container">
          <div className="row pb-5 justify-content-center">
            <Heading
              title="How It Works"
              para="Let;s Get Into The Process of Work"
            />
            {Process_Card(processes[0])}
            {Process_Card(processes[1])}
            {Process_Card(processes[2])}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
