import React from 'react';
import './Scount.css';

const Data = [
  {
    icon: "bi bi-emoji-smile",
    count: "12000",
    para: "Students",
    style: "color: #bb0852",
  },
  {
    icon: "bi bi-",
    count: "225",
    para: "Campus Ambassador",
    style: "color: #bb0852",
  },
  {
    icon: "bi bi-emoji-smile",
    count: "500",
    para: "Internships",
    style: "color: #15be56",
  },
  {
    icon: "bi bi-emoji-smile",
    count: "35",
    para: "Planned Events",
    style: "color: #ee6c20",
  },
];

const Model = (prop) => {
  return (
    <>
      <div class="col-lg-3 col-md-6">
        <div class="count-box mt-3">
          <i class={prop.icon}></i>
          <div>
            <div className="row">
              <span
                data-purecounter-start="0"
                data-purecounter-end={prop.count}
                data-purecounter-duration="0"
                class="purecounter"
              >
                {prop.count}
              </span>
              <span className="small-plus-con">+</span>
            </div>
            <p>{prop.para}</p>
          </div>
        </div>
      </div>
    </>
  );
}

const Scount = () => {
  return (
    <>
      <section id="counts" class="counts">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="row gy-4">
              {Model(Data[0])}
              {Model(Data[1])}
              {Model(Data[2])}
              {Model(Data[3])}
              </div>
        </div>
      </section>
    </>
  );
}

export default Scount