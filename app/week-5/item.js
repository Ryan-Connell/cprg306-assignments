import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <div className="font-bold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
};

export default Item;