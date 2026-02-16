import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";

const Recipes = () => {
  const [selected, setSelected] = useState("Buff");

  const categories = ["Buff", "Chicken", "Veg"];

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes?limit=10");
      console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute -right-20 top-4/10 -translate-y-1/2
                 w-12 h-12 flex items-center justify-center
                 bg-white border-2 border-gray-100 rounded-full
                 cursor-pointer z-20"
      >
        <ChevronRight size={24} className="text-black" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute -left-20 top-4/10 -translate-y-1/2
                 w-12 h-12 flex items-center justify-center
                 bg-white border-2 border-gray-100 rounded-full
                 cursor-pointer z-20"
      >
        <ChevronLeft size={24} className="text-black" />
      </div>
    );
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 px-40 py-16  ">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-[39px] text-[#101828]">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </p>
        <p className="text-[20px] text-[#6B788E]">
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>

      <div className="flex gap-6 p-4 rounded-xl w-fit">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-12 py-4 text-[20px] text-[#101828] font-semibold rounded-full border transition-all duration-200
            ${
              selected === item
                ? "border-black bg-white font-semibold shadow-md"
                : "border-[#EBEDF0] bg-white "
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="w-full">
        <div className="max-w-5xl mx-auto relative">
          {recipes.length > 0 ? (
            <Slider {...settings}>
              {recipes.map((recipe) => (
                <div key={recipe.id} className="px-4">
                  <div className="flex flex-col justify-center items-center rounded-lg p-4">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-52 object-cover rounded-lg"
                    />
                    <h2 className="text-[25px] text-center font-bold mt-3">
                      {recipe.name}
                    </h2>
                    <h3 className="text-[#D95103] text-[31px] font-bold">
                      ${recipe.caloriesPerServing}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div>No recipes found</div>
          )}
        </div>
      </div>

      <div>
        <button className="bg-[#0C6967] flex gap-2 justify-center items-center rounded-full text-white py-5 px-10 ">
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Recipes;
