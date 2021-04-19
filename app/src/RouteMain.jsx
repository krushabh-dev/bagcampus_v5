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
        <Route exact path="bagcampus_v5/internship" component={InternshipSearch} />
        <Route exact path="bagcampus_v5/jobs" component={jobSearch} />
        {/* <Route exact path="/scholarship" component={InternshipSearch} /> */}
        <Route exact path="bagcampus_v5/" component={App} />
        <Route exact path="bagcampus_v5/blog" component={BlogMain} />
        <Route exact path="bagcampus_v5/sign" component={SignUp} />
        <Route exact path="bagcampus_v5/log" component={LogIn} />
      </Switch>
    </>
  );
}

export default RouteMain