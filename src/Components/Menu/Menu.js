import React from 'react';
import '../../assets/styles/Menu.css';

export function Menu() {
    const menuItems = [
        { name: "Margherita Pizza", price: "$12" },
        { name: "Caesar Salad", price: "$8" },
        { name: "Grilled Salmon", price: "$18" },
        { name: "Pasta Carbonara", price: "$14" },
    ];

    return (
        <section className="menu-section">
            <h2>Our Menu</h2>
            <ul className="menu-list">
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}