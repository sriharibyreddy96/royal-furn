import React, { useEffect } from "react";
import "./styles.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Contactpage from "./pages/Contactpage";
import AllProducts from "./pages/AllProducts";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/category/:category" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/terms" element={<TermsConditions />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
