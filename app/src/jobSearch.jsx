import React from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Slinks from "./Slinks/Slinks";
import Blog from "./Blog/Blog";
import Internships from "./Internship/Internships";

const jobSearch = () => {
  return (
    <>
      <section id="job_Search">
        <Nav />
        <Header tagline="Jobs" />
        <Internships />
        <Slinks />
        <Blog />
      </section>
    </>
  );
};

export default jobSearch;
