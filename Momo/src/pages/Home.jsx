import React from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";
import Story from "../components/Story";
import ProcessBehind from "../components/ProcessBehind";
import HappyCostumers from "../components/HappyCostumers";
import GetInTouch from "../components/GetInTouch";
import Map from "../components/Map";

const Home = () => {
  return (
    <div className="max-w-screen m-t-10 leading-1.2">
      <Hero />
      <Story />
      <Recipes />
      <ProcessBehind />
      <HappyCostumers />
      <GetInTouch />
      <Map />
    </div>
  );
};

export default Home;
