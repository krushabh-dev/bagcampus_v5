import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top px-md-5" id="mainNav">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-chevron-circle-down"></i>
          </button>
          <NavLink className="navbar-brand" to="/">
            Bagcampus
          </NavLink>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/internship">
                Intenships
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/scholarship">
                Scholarship
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sign">
          <div className="nav-item active button-group mx-md-3">
            <NavLink className="nav-link sign-btn button btn-common" to="/sign">
              SignIn
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav