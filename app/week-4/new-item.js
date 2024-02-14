"use clinet";
import React, { useState } from 'react';

const NewItem = () => {
  // Initialize state variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create item object
    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    // Log item object to console
    console.log(item);

    // Display alert with current state
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset state variables to initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  // Render the component
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-700">Name:</label>
        <input 
          id="name"
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          required 
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-2 text-gray-700">Quantity:</label>
        <input 
          id="quantity"
          type="number" 
          min="1" 
          max="99" 
          value={quantity} 
          onChange={(event) => setQuantity(Number(event.target.value))} 
          required 
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 text-gray-700">Category:</label>
        <select 
          id="category" 
          value={category} 
          onChange={(event) => setCategory(event.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default NewItem;