import React from "react";
function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <h5>Free and open market education</h5>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "None" }}>
            Varsity &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br /> <br />
          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "None" }}>
            TradingQ&A &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
          <img
            src="public/images/education.svg"
            alt="Education"
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
