"use client"
import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';

export default function Page(){
    const [items, setItems] = useState([]);

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
            <NewItem items={items} setItems={(setItems)} />
            <ItemList items={items} />
        </main>
    );
};