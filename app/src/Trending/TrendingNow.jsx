import React from "react";
import Heading from "../Heading";
import "./Trending.css";

const Trend_Detail = [
  {
    imgSrc:
      "https://cdn.iconscout.com/icon/premium/png-128-thumb/chennai-central-railway-station-1575705-1333994.png",
    alt: "Chennai",
    title: "Chennai",
    link: "abac.com",
  },
  {
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-256/shanivarwada-2-161359.png",
    alt: "Pune",
    title: "Pune",
    link: "abac.com",
  },
  {
    imgSrc: "https://image.flaticon.com/icons/png/128/2538/2538922.png",
    alt: "Mumbai",
    title: "Mumbai",
    link: "abac.com",
  },
  {
    imgSrc: "https://image.flaticon.com/icons/png/128/2322/2322340.png",
    alt: "Delhi",
    title: "Delhi",
    link: "abac.com",
  },
];

const Trend = (prop) => {
  return (
    <>
      <div className="col-md-3 col-6" data-aos="fade-up">
        <div class="card mb-3">
          <div class="card city-card">
            <img src={prop.imgSrc} class="card-img-top card-city-img" alt={prop.alt} width="50px" />
            <div class="card-body">
              <h5 class="card-title">{prop.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TrendingNow = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <Heading title="Top Cities To Work" para="" />
          <div className="row rsm-scroll">
            {Trend(Trend_Detail[0])}
            {Trend(Trend_Detail[1])}
            {Trend(Trend_Detail[2])}
            {Trend(Trend_Detail[3])}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingNow;