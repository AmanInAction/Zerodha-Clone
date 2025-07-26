import React from "react";
function Team() {
  return (
    <div className="container border-top">
      <div className="row p-4 mt-4 mb-5">
        <h1 className="fs-3 text-center">People</h1>
        <div className="col-6 mt-4">
          <img
            src="public/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%", marginLeft: "110px" }}
          />
          <p className="text-center">Nithin Kamath</p>
          <p className="text-muted text-center">Founder, CEO</p>
        </div>
        <div className="col-6 mt-4">
          <p className="text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted">Playing basketball is his zen.</p>
          <p className="text-muted">
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
