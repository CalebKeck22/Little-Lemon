import { Link } from 'react-router-dom';
import '../../assets/styles/Main.css';

export function Card({ cardData }) {
    return (
        <div className="cards">
            {cardData.map((card, index) => (
                <div key={index} className="card">
                    <Link
                        to={{
                            pathname: "/order-online",
                        }}
                        state={{ card }}
                        className="card-link"
                    >
                        <h3>{card.title}</h3>
                        <img src={card.image} alt={card.altText} />
                        <p>{card.description}</p>
                        <p>{card.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}