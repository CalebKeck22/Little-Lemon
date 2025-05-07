import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/OrderOnline.css';

export function OrderOnline() {
    const location = useLocation();
    const card = location.state?.card

    return (
        <section className="order-online-section">
            <h2>Order Online</h2>
            {card ? (
                <div className="order-card">
                    <h3>{card.title}</h3>
                    <img src={card.image} alt={card.altText} />
                    <p>{card.description}</p>
                    <p>{card.price}</p>
                    <button className="order-button">Order Now</button>
                </div>
            ) : (
                <p>Select an item to order online.</p>
            )}
        </section>
    );
}