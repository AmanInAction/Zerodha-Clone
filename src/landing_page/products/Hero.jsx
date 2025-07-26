import React from "react";
function Product() {
  return (
    <div className="container text-center p-5">
      <h3>Zerodha Products</h3>
      <h5 className="mt-3">Sleek, modern, and intuitive trading platforms</h5>
      <p className="mt-4">
        Check out our{" "}
        <a href="#" className="text-decoration-none">
          investment offerings{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Product;
