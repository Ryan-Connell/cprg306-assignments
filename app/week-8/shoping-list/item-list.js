'use client'
import React, { useState } from 'react';
import Item from './item.js';
import items from './items.json';

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    if (sortBy === "groupedCategory") {
      return a.category.localeCompare(b.category);
    }
    return a.quantity - b.quantity;
  });

  const handleGroupByCategory = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      const category = item.category;
      acc[category] = [...(acc[category] || []), item];
      return acc;
    }, {});
    
    return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
      <div key={category}>
        <h2 className="text-lg font-bold mb-2 capitalize px-4" style={{ fontFamily: 'Indie Flower' }}>{category}</h2>
        {itemsInCategory.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy === "name" ? "grey" : "lightgrey", fontFamily: 'Indie Flower', padding: '5px' }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{ backgroundColor: sortBy === "category" ? "grey" : "lightgrey", fontFamily: 'Indie Flower', padding: '5px' }}
      >
        Sort by Category
      </button>
      <button
        onClick={() => setSortBy("groupedCategory")}
        style={{ backgroundColor: sortBy === "groupedCategory" ? "grey" : "lightgrey", fontFamily: 'Indie Flower', padding: '5px' }}
      >
        Group by Category
      </button>
      {sortBy === "groupedCategory" ? (
        handleGroupByCategory()
      ) : (
        sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))
      )}
      <ul style={{ fontFamily: 'Indie Flower' }}>
      </ul>
    </div>
  );
}