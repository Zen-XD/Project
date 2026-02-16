import React from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";
import Story from "../components/Story";
import ProcessBehind from "../components/ProcessBehind";
import HappyCostumers from "../components/HappyCostumers";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <div className="max-w-screen leading-1.2">
      <Hero />
      <Story />
      <Recipes />
      <ProcessBehind />
      <HappyCostumers />
      <GetInTouch />
    </div>
  );
};

export default Home;
