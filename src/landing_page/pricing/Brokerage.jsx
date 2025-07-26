import React from "react";
function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <div className="col-8 p-4">
          <a href="#" className="text-center text-decoration-none">
            <h5>Brokerage calculator</h5>
          </a>
          <ul className="text-muted" style={{ lineHeight: "1.8rem" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of
              &#8377;50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copy of contract notes, if required, shall be charges
              &#8377;20 per contract note. Courier charges may apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or &#8377;100 per executed order
              for equity (whichever is less).
            </li>
            <li>
              For NRI account (PIS), 0.5% or &#8377;200 per executed order for
              equity (whichever is less).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged &#8377;40 per executed order instead of &#8377;20 per
              executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" className="text-decoration-none">
            <h5>List of Charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
