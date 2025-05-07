import { Link } from "react-router-dom";
import '../../assets/styles/ReserveButton.css'

export function ReserveTable() {
    return (
        <Link to="/booking">
            <button className="reserve-button">
                Reserve a Table
            </button>
        </Link>
    );
}