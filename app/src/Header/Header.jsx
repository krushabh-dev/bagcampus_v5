import React, { useState } from "react";
import "./header.css";
 import Search from "./Search";

const Header = (props) => {

  const [Key, setKey] = useState({
    title: "",
    location: "",
  });

  const keyInputEvent = (prop) => {
    const data = prop.target.value;
    const tname = prop.target.name;

    setKey((prevValue) => {
      // console.log(prevValue);
      console.log(tname + " : " +data);

      return {
        ...prevValue,
        [tname]: data,
      };
    });

  };

  return (
    <>
      <section id="header">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="heading text-center pb-4">
                <h2 className="mt-4" data-aos="fade-up">
                  Let's Explore Great {props.tagline}
                </h2>
                <p className="mb-2" data-aos="fade-up" data-aos-delay="400">
                  Grab The Best Opportunities With Bagcampus
                </p>
              </div>
            </div>
            <div className="col-md-10" data-aos="fade-up" data-aos-delay="800">
              <form>
                <div className="form-row align-items-center search-form justify-content-center text-center">
                  <div className="col-md-3 my-1">
                    <label className="sr-only">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputName"
                      name="title"
                      placeholder="Title, Keyword, Skill, etc."
                      value={Key.title}
                      onChange={keyInputEvent}
                    />
                    <div className="search-icon">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                  <div className="col-md-3 my-1">
                    <label className="sr-only">Location</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        id="inlineFormInputGroupUsername"
                        placeholder="Location"
                        value={Key.location}
                        onChange={keyInputEvent}
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 my-1">
                    <label className="sr-only">Type</label>
                    <div className="input-group">
                      <select
                        className="custom-select my-1 mr-sm-2 form-control"
                        id="inlineFormCustomSelectPref"
                      >
                        <option defaultValue>Type</option>
                        <option value="Internship">Internship</option>
                        <option value="Job">Job</option>
                        <option value="Scholarship">Scholarship</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-2 my-1">
                    <button type="submit" class="button">
                      <i class="fa fa-search"></i> Search
                    </button>
                  </div>
                </div>
              </form>
              <Search title={Key.title} location={Key.location} />
            </div>
            {/* { Key === "" ? null : {ShowLine} } */}
          </div>
        </div>
      </section>
    </>
  );
};


export default Header;
