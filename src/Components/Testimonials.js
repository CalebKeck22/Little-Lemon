import React from 'react';

export function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            text: "Little Lemon's lemonade is the best I've ever had! Refreshing and perfectly sweet.",
        },
        {
            name: "Jane Smith",
            text: "The banana cream pie is absolutely delicious. It's my go-to dessert!",
        },
        {
            name: "Emily Johnson",
            text: "The handcrafted ice cream is a must-try. So many amazing flavors to choose from!",
        },
        {
            name: "Michael Brown",
            text: "Little Lemon's atmosphere is so cozy, and the staff is incredibly friendly. A perfect spot for a treat!",
        },
    ];

    return (
        <section className="testimonials">
            <h4>What Our Customers Say</h4>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-name">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}