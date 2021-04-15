import  React from 'react';

const Heading = (prop) => {
  return (
    <>
      <div className="col-md-12 mt-5 mb-2 animate__backInDown animate__animated">
        <div className="section-header heading text-center justify-content-center py-3">
          <h2 className="section-title">{prop.title}</h2>
          <p className="mb-4">{prop.para}</p>
        </div>
      </div>
    </>
  );
}

export default Heading