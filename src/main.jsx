import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Product from "./landing_page/products/ProductPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
