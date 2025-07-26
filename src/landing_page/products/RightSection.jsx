import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <div className="col-6 p-3">
          <h5>{productName}</h5>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} alt="" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
