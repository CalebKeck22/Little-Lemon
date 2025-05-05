import { Description } from "./Description";
import { MainImage } from "./MainImage";
import { Card } from "./Card";
import { Testimonials } from "./Testimonials";
import { cardData } from "./CardData";

export function Main() {
    return (
        <main className="main">
            <div className="main-description">
                <Description />
            </div>
            <div className="main-image">
                <MainImage />
            </div>
            <div className="cards">
                <Card cardData={cardData} />
            </div>
            <Testimonials />
        </main>
    );
}