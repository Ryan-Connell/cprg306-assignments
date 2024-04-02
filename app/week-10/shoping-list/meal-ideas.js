'use client'

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };
  function checkMeals() {
    if (meals === null || ingredient === "") {
      return <li>Select Ingredient to see meal ideas!</li>;
    } else {
      return meals.map((meal) => (
        <li
          key={meal.idMeal}
          className="p-2 m-4 bg-slate-800 max-w-sm border-2 border-slate-800 hover:border-orange-400 hover:border-2"
        >
          <p>{meal.strMeal}</p>
        </li>
      ));
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {checkMeals()}
      </ul>
    </div>
  );
};