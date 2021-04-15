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

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <TrendingNow />
      <Category />
      {/* <TopPick /> */}
      <Internships />
      <Scount />
      <Process />
      <Slinks />
      <Blog />
    </>
  );
}

export default App