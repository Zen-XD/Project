import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Menu from "../pages/Menu";
import AllergyAdvice from "../pages/AllergyAdvice";
import PublicLayout from "../layout/PublicLayout";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/allergy-advice" element={<AllergyAdvice />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
