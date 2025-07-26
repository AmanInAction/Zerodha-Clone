import React from "react";
function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="public/images/largestBroker.svg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-4 mt-3">
          <h1 className="fs-3">Largest stock broker in India</h1>
          <p className="mb-5 fs-6">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="public/images/pressLogos.png"
            alt="Press"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
