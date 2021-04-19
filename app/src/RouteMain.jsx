import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import jobSearch from './jobSearch';
import InternshipSearch from './InternshipSearch';
import BlogMain from './BlogMain';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';

const RouteMain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/internship" component={InternshipSearch} />
        <Route exact path="/jobs" component={jobSearch} />
        {/* <Route exact path="/scholarship" component={InternshipSearch} /> */}
        <Route exact path="/" component={App} />
        <Route exact path="/blog" component={BlogMain} />
        <Route exact path="/sign" component={SignUp} />
        <Route exact path="/log" component={LogIn} />
      </Switch>
    </>
  );
}

export default RouteMain