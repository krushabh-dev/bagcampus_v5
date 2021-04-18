import React from 'react';
import './main.css'

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-info">
                <img
                  src="https://ambassador.bagcampus.in/img/logo-white.png"
                  alt="bagcampus"
                />
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="fa fa-angle-right"></i>
                    <a
                      href="https://bagcampus.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-angle-right"></i> <a href="/">About us</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  {/* A108 Adam Street <br></br>
                          New York, NY 535022<br></br>
                          United States <br></br>> */}
                  <strong>Phone:</strong> +91 9403 179 389<br></br>
                  <strong>Email:</strong> admin@bagcampus.in<br></br>
                </p>

                <div class="social-links">
                  <a href="https://www.linkedin.com/company/" class="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://medium.com/bagcampus" class="medium">
                    <i class="fab fa-medium"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/pages/category/Education-Website/Bagcampus-101950538467707/"
                    class="facebook"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/@Bagcampus1" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            © Copyright <strong>bagcampus</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Powered by
            <a
              href="https://bagcampus.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              bagcampus
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer