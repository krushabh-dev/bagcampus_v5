import React from "react";
import Heading from "../Heading";
import './Category.css'

const List = [
  {
    key: "00",
    heading: "Web Development",
    count: "48",
    classfill: "fa fa-file-code",
  },
  {
    key: "01",
    heading: "Andrid Development",
    count: "48",
    classfill: "fas fa-mobile",
  },
  {
    key: "02",
    heading: "Management",
    count: "48",
    classfill: "fas fa-poll",
  },
  {
    key: "04",
    heading: "Marketing",
    count: "48",
    classfill: "fas fa-bullhorn",
  },
  {
    key: "05",
    heading: "Software Jobs",
    count: "48",
    classfill: "fas fa-code",
  },
  {
    key: "06",
    heading: "Internships",
    count: "48",
    classfill: "far fa-lightbulb",
  },
  {
    key: "07",
    heading: "Research",
    count: "48",
    classfill: "fas fa-atom",
  },
  {
    key: "08",
    heading: "Other",
    count: "48",
    classfill: "fas fa-icons",
  },
];

const Card = (prop) => {
  return (
    <>
      <div
        className="col-lg-3 col-md-6 col-xs-5 col-5 f-category card-body"
        data-aos="fade-up"
      >
        <div className="card">
          <div className="card-body">
            <a href="browse-jobs.html">
              <div className="icon bg-color-4">
                <i className={prop.classfill}></i>
              </div>
              <h3>{prop.heading}</h3>
              <p>({prop.count} jobs)</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
const Category = () => {
  return (
    <>
      <section id="category">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <Heading title="Browse Categories" para="Explore Top categories" />

            {Card(List[0])}
            {Card(List[1])}
            {Card(List[2])}
            {Card(List[3])}
            {Card(List[4])}
            {Card(List[5])}
            {Card(List[6])}
            {Card(List[7])}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category