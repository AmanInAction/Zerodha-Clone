import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <div className="col-6 p-4">
          <img src={imageURL} alt="" style={{ width: "90%" }} />
        </div>
        <div className="col-6 p-3">
          <h5>{productName}</h5>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "40px" }}
              className="text-decoration-none"
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <br />
          <div>
            <a href={googlePlay}>
              <img src="public/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "40px" }}>
              <img src="public/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
