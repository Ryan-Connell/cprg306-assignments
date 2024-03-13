"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItem] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (id) => {
    const selectedIngredient = items.find((ingredient) => ingredient.id === id);
    console.log("selectedIngredient", selectedIngredient);
    const separatedSymbols = selectedIngredient.name.split(",")[0];
    console.log("separatedSymbols", separatedSymbols);
    const cleanedIngredient = separatedSymbols.replace(
      /[\p{Emoji_Presentation}\p{Emoji}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}\p{Emoji_Component}]/gu,
      ""
    );
    console.log("item selected", cleanedIngredient);
    setSelectedItem(cleanedIngredient);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <div className="flex flex-row bg-slate-950">
        <div>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div>
          <ItemList items={items} onSelect={handleItemSelect} />
          <div className="flex border-2 border-double justify-center align-middle max-h-56 overflow-scroll border-gray-600 rounded-md p-3 text-white bg-slate-800 w-80">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </div>
  );
}