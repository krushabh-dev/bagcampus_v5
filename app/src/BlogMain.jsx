import React from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Slinks from "./Slinks/Slinks";
import Blog from "./Blog/Blog";
import Internships from "./Internship/Internships";

const BlogMain = () => {
  return (
    <>
      <section id="Blog_Main">
        <Nav />
        <Header tagline="Blogs" />
        <Blog />
        <Internships />
        <Slinks />
      </section>
    </>
  );
};

export default BlogMain;
