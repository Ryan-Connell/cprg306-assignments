'use client'
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping List</h2>
      <div className="mb-4">
        <label>Sort By:</label>
        <button
          className={sortBy === "name" ? "bg-blue-500 text-white px-2 py-1 rounded mr-2" : "bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2"}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={sortBy === "category" ? "bg-blue-500 text-white px-2 py-1 rounded" : "bg-gray-300 text-gray-700 px-2 py-1 rounded"}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
