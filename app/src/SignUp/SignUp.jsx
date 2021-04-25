import React from "react";
import Nav from "../Nav/Nav";
import "./SignUp.css";
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

const RightSideSignIn = () => {
  return (
    <>
      <div class="card">{GForm()}</div>
    </>
  );
};

const LeftSideSignIn = () => {
  return (
    <>
      <div class="card">
        <img src={img} class="card-img-top img-fluid" alt="imagehere" />
        <div class="card-body pt-4">
          <h5 class="card-title mt-2">Let's Get Started With Bagcampus</h5>
          <p class="card-text">Don’t worry, we won’t send you spam</p>
          <p class="card-text">Already Have Account <a href="/log"> Login </a></p>
        </div>
      </div>
    </>
  );
};

const SignInBtn = () => {
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
      <form className="col-md-12" id="login">
        <div className="form-group col-md-6"></div>
        <div className="car col-md-6">
          <button type="button" class="btn btn-primary" id="liveToastBtn">
            Register With Phone
          </button>
        </div>
      </form>

      <form id="login" className="col-md-12">
        <div className="form-group col-md-6"></div>
        <div className="car col-md-6">
          <button type="submit" className="btn btn-primary">
            Register With Email
          </button>
        </div>
      </form>

      {SignInBtn()}
    </>
  );
};

const SignIn = () => {
  return (
    <>
      <section id="SignIn">
        <Nav />
        <div id="Main_Login">
          <div className="container">
            <div className="base relative">
              <div className="row d-flex flex-row justify-content-between justify-content-center align-items-center">
                <div className="col-md-5 d-flex flex-column w-40">
                  {LeftSideSignIn()}
                </div>
                <div className="col-md-7 flex flex-column">
                  {RightSideSignIn()}
                </div>
              </div>
            </div>
            <div className="relative">{Tfooter()}</div>
          </div>
          <Footer />
        </div>
      </section>

      <div class="position-fixed bottom-0 right-0 p-3 toast-main">
        <div
          id="liveToast"
          class="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay="2000"
        >
          <div class="toast-header">
            <img src="..." class="rounded mr-2" alt="..." />
            <strong class="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
