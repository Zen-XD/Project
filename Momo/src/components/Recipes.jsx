import React, { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";

const Recipes = () => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-7xl max-auto py-10">
      {recipes.length > 0 ? (
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
                <h3 className="text-orange-600 text-2xl font-bold">
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
  );
};

export default Recipes;
