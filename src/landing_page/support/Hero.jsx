import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h6>Support Portal</h6>
        <a href="#" style={{ color: "#fff" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-5">
          <h3 className="fs-6">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            type="text"
            placeholder="E.g. How do I activate F&O?"
            id="inputBox"
          />
          <a href="#" style={{ color: "#FFF" }}>
            Track account opening
          </a>{" "}
          &nbsp;&nbsp;
          <a href="#" style={{ color: "#FFF" }}>
            Track segment activation
          </a>
          &nbsp;&nbsp;
          <a href="#" style={{ color: "#FFF" }}>
            Intraday margins
          </a>
          &nbsp; &nbsp;
          <a href="#" style={{ color: "#FFF" }}>
            {" "}
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3">
          <h5>Featured</h5>
          <ol>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
