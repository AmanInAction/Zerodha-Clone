import React from "react";
function Pricing() {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-6">
          <img
            src="public/images/pricing.png"
            alt="Pricing"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <h5>Unbeatable Pricing</h5>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "None" }}>
            See pricing
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
