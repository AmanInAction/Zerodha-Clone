import React from "react";
function Universe() {
  return (
    <div className="container p-5 mt-5 text-center">
      <div className="row p-5">
        <h5 className="text-bold text-muted text-center">
          The Zerodha Universe
        </h5>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img
            src="public/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "60%" }}
            className="mt-3"
          />
          <p className="text-muted text-xm mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="public/images/streakLogo.png"
            alt=""
            style={{ width: "50%" }}
            className="mt-3"
          />
          <p className="text-muted text-xm mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="public/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%" }}
            className="mt-3"
          />
          <p className="text-muted text-small mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img src="public/images/smallcaseLogo.png" alt="" className="mt-3" />
          <p className="text-muted text-small mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="public/images/dittoLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-muted text-small mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
          <img
            src="public/images/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
            className="mt-3"
          />
          <p className="text-muted text-small mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
