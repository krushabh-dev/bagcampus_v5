import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top px-md-5">
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
          <a className="navbar-brand" href="#">
            Bagcampus
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Intenships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Scholarship
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="sign">
          <div className="nav-item active button-group mx-md-3">
            <a className="nav-link sign-btn button btn-common" href="#header">
              SignIn
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav