import React from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Slinks from "./Slinks/Slinks";
import Blog from "./Blog/Blog";
import Internships from "./Internship/Internships";

const InternshipSearch = () => {
  return (
    <>
      <section id="Internship_Search">
        <Nav />
        <Header tagline="Internships" />
        <Internships />
        <Slinks />
        <Blog />
      </section>
    </>
  );
};

export default InternshipSearch;
