export function Card({ cardData }) {
    return (
        <div className="cards">
            {cardData.map((card, index) => (
                <div key={index} className="card">
                    <h3>{card.title}</h3>
                    <img src={card.image} alt={card.altText} />
                    <p>{card.description}</p>
                    <p>{card.price}</p>
                </div>
            ))}
        </div>
    );
}