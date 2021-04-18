import React from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import TrendingNow from "./Trending/TrendingNow";
import Category from './Category/Category';
// import TopPick from './Jobs/TopPick';
import Process from './Process/Process';
import Scount from './Count/Scount';
import Slinks from './Slinks/Slinks';
import Blog from './Blog/Blog';
import Internships from './Internship/Internships';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <section id="Home_Page">
        <Nav />
        <Header tagline="Opportunities" />
        <TrendingNow />
        <Category />
        {/* <TopPick /> */}
        <Internships />
        <Scount />
        <Process />
        <Slinks />
        <Blog />
        <Footer />
      </section>
    </>
  );
}

export default App