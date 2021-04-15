import React from 'react';
import "./Rsmart.css";
import Heading from "../Heading"

const Line = [
  {
    iclass: "fab fab-search",
    line1: "Great Student",
    line2: "Available on Site",
  },
  {
    iclass: "fab fab-search",
    line1: "Get smart responses with unique",
    line2: "two-way matching technology",
  },
  {
    iclass: "fab fab-search",
    line1: "Highlight your company as a",
    line2: "great place to work",
  },
];

const RData = (props) => {
  return (
    <>
      <li class="flex-row text-center">
        <i className={props.iclass}></i>
        {props.line1}
        <br></br>
        {props.line2}
      </li>
    </>
  );
}

const R = () => {
  return(
    <>
      <section id='recuirter-ad'>
          <div class="container-fluid recruit mt-3 pt-5 pb-5">
            <div class="row">
            <div class="col-12 pl-xl-5 pr-xl-5 pl-lg-2 pr-lg-2  pt-3">
                <Heading title="Recuit Smart at Bagcampus" />
                <ul class="d-flex justify-content-around mb-5 ml-5 mt-3">
                    {RData(Line[0])}
                    {RData(Line[1])}
                    {RData(Line[2])}
                </ul>
                <a href="recuiterbox">
                    <button type="button" class="btn btn-primary btn-yellow  d-block m-auto ">Post a Job Absolutely
                        Free*</button>
                </a>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default R