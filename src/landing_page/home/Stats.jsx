import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-6">
          <h3>Trust with coincidence</h3>
          <h6>Customer-first always</h6>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h6>No spam or gimmicks</h6>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="#">Our Philosophies</a>
          </p>
          <h6>The Zerodha universe</h6>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h6>Do better with money</h6>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="public/images/ecosystem.png"
            alt=""
            style={{ width: "80%", marginLeft: "10%" }}
          />
          <div className="text-center">
            <a href="#" style={{ textDecoration: "None" }}>
              Explore Our Products
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="#" style={{ textDecoration: "None" }}>
              Try Kite demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
