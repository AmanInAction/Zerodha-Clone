import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <h3>Charges</h3>
        <p className="text-muted mb-4">List of all charges and taxes</p>
        <div className="row p-5">
          <div className="col-4 p-4">
            <img src="public/images/pricing0.svg" alt="" />
            <h1 className="fs-6">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —{" "}
              <br />₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="public/images/intradayTrades.svg" alt="" />
            <h1 className="fs-6">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="public/images/pricing0.svg" alt="" />
            <h1 className="fs-6">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
