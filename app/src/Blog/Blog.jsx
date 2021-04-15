import React from 'react';
import Heading from '../Heading';
import "./Blog.css"

const BlogData = [
  {
    date: "Dec 21, 2020",
    titel: "Software Development Engineer Intern at Amazon",
    link:
      "https://medium.com/bagcampus/software-development-engineer-intern-at-amazon-6f3bbc3f3776",
  },
  {
    date: "Dec 21, 2020",
    titel: "Software Development Engineer Intern at Amazon",
    link:
      "https://medium.com/bagcampus/software-development-engineer-intern-at-amazon-6f3bbc3f3776",
  },
  {
    date: "Dec 21, 2020",
    titel: "Software Development Engineer Intern at Amazon",
    link:
      "https://medium.com/bagcampus/software-development-engineer-intern-at-amazon-6f3bbc3f3776",
  },
];

const post = (props) => {
  return (
    <>
      <div class="col-lg-4 mt-3">
        <div class="post-box">
          <span class="post-date">{props.date}</span>
          <h3 class="post-title">{props.titel}</h3>
          <a href={props.link} class="readmore stretched-link mt-auto">
            <span>Read More</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}

const Blog = () => {
  return (
    <>
      <section id="recent-blog-posts" class="recent-blog-posts">
        <div class="container aos-init aos-animate mb-5" data-aos="fade-up">
          <div class="row">
            <Heading title="Blogs" para="Recent posts form our Blog" />
            {post(BlogData[0])}
            {post(BlogData[1])}
            {post(BlogData[2])}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog