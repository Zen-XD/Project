import React from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div className="max-w-screen">
      <Hero />
      <Recipes />
    </div>
  );
};

export default Home;
