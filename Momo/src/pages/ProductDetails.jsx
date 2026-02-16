import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const data = useLocation();
  const recipe = data.state;
  console.log(data);
  return (
    <div className="py-20">
      <img src={recipe.image} alt="" />
      Hello
    </div>
  );
};

export default ProductDetails;
