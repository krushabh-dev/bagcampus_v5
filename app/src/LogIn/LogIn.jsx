import React from "react";
import Nav from "../Nav/Nav";
import "./Login.css";
import img from "../Assets/undraw_online_ad_re_ol62.svg";
import Footer from "../Footer/Footer";

const Tfooter = () => {
  return (
    <>
      <div class="Legal " id="LegalNotification">
        <p>
          By registering, you agree to our
          <a href="/termsandconditions/"> terms conditions</a> And
          <a href="/privacypolicy/"> privacy policy</a>. <br></br>
          You hereby authorize Bagcampus and/or its representatives to call you,
          e-mail you, or SMS you. This consent will supersede any registration
          for any Do Not Call (DNC) / National Do Not Call (NDNC).
        </p>
      </div>
    </>
  );
};

const RightSideLogIn = () => {
  return (
    <>
      <div class="card">{GForm()}</div>
    </>
  );
};

const LeftSideLogIn = () => {
  return (
    <>
      <div class="card">
        <img src={img} class="card-img-top img-fluid" alt="imagehere" />
        <div class="card-body pt-4">
          <h5 class="card-title mt-2">Let's Get Started With Bagcampus</h5>
          <p class="card-text">Don’t worry, we won’t send you spam</p>
          <p class="card-text">
            New To Bagcampus <a href="/sign"> Register </a>
          </p>
        </div>
      </div>
    </>
  );
};

const LogInBtn = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 pt-4">
          <p className="pt-4">OR</p>
        </div>
        <div className="col-6 col-md-3">
          <div class="button GooglePartner">
            <button
              class="btn ml-1 btn-google mr-md-3 mb-2 mb-md-0"
              id="GooglePartnerlogin"
            >
              <i class="fab fa-google mr-1"></i> Google
            </button>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div class="button GitubPartner">
            <button
              type="button"
              class="btn ml-1 btn-github mr-md-3 mb-2 mb-md-0"
              id="GithubPartnerlogin"
            >
              <i class="fab fa-github mr-1"></i> Github
            </button>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div class="button TwitterPartner">
            <button
              type="button"
              class="btn ml-1 btn-fb mr-md-3 mb-2 mb-md-0"
              id="TwitterPartnerlogin"
            >
              <i class="fab fa-twitter mr-1"></i> Twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const GForm = () => {
  return (
    <>
      <form id="login" method="GET" className="col-md-12">
        <div className="form-group col-md-6"></div>
        <div className="car col-md-6">
          <input type="text" className="btn form-control" name="Email" placeholder="Email / Mobile" />
        </div>
        <div className="car col-md-6">
          <input type="text" className="btn form-control" placeholder="Password" />
        </div>

        <div className="form-group col-md-6"></div>
        <div className="car col-md-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      {LogInBtn()}
    </>
  );
};

const LogIn = () => {
  return (
    <>
      <section id="LogIn">
        <Nav />
        <div id="Main_Login">
          <div className="container">
            <div className="base relative">
              <div className="row d-flex flex-row justify-content-between justify-content-center align-items-center">
                <div className="col-md-5 d-flex flex-column w-40">
                  {LeftSideLogIn()}
                </div>
                <div className="col-md-7 flex flex-column">
                  {RightSideLogIn()}
                </div>
              </div>
            </div>
            <div className="relative">{Tfooter()}</div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default LogIn;
