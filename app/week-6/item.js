import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="border border-gray-300 p-4 m-4 bg-gray-200 text-black flex flex-col flex-grow" style={{ justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 className="text-lg font-Indie Flower capitalize">{name}</h3>
                    <p>Quantity: {quantity}</p>
                    <p className="capitalize">Category: {category}</p>
                </div>
                <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
            </div>
        </li>
    );
};

export default Item;