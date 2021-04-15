import React from 'react';

const Links = [
  {
    key: "01",
    link: "https://jobs.cisco.com/portal/4/images/logo.svg",
    alt: "cisco",
  },
  {
    key: "01",
    link:
      "https://jobs.intel.com/Views/Client/d1fbe68e-ee7a-4d07-ba71-10c3e62672ab/images/intel-logo-black.png",
    alt: "cisco",
  },
  {
    key: "01",
    link:
      "https://cdn.phenompeople.com/CareerConnectResources/COGNGLOBAL/en_global/desktop/assets/images/v-1607827487659-cognizant-careers-logo.png",
    alt: "cisco",
  },
  {
    key: "01",
    link:
      "https://rmkcdn.successfactors.com/233641b7/490b3896-41fe-480d-b132-6.jpg",
    alt: "cisco",
  },
  {
    key: "01",
    link:
      "https://careers.citigroup.com/citi/assets/img/brand/citi-logo-no-r.png",
    alt: "citi",
  },
  {
    key: "01",
    link:
      "https://assets.airtel.in/static-assets/selfcare/images/airtel-logo_opt.webp",
    alt: "cisco",
  },
  {
    key: "01",
    link:
      "https://assets.airtel.in/static-assets/selfcare/images/airtel-logo_opt.webp",
    alt: "airtel",
  },
];

const slide = (props) => {
  return (
    <>
      <div class="swiper-slide">
        <img
          src={props.link}
          class="img-fluid"
          alt={props.alt}
        />
      </div>
    </>
  );
}

// const IfLoop = () => {
//     for (let index = 0; index < Links.length; index++) {
//         const element = Links[index];
//         slide(Links[element]);
//     }
// }

const Company = () => {
  return (
    <>
      <section id="company" class="company">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="clients-slider swiper-container">
            <div class="swiper-wrapper align-items-center">
              {slide(Links[0])}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company