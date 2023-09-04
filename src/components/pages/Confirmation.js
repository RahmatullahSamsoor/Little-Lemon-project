import Image from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";

export default function Confirmation(){
    return(
        <header className="confirm-header">
            <img
            src={Image}
            alt="Littel Lemon"
            className="confirm-header-img"/>
            <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
      <section className="redirect-buttons">
        <a
        className="redirect-button"
        href={require ("../../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
        >
            Browse Menu
        </a>
        <Link className="redirect-button" to="Order">Order online</Link>
        <Link className="redirect-button" to="/">Home page</Link>

      </section>
        </header>
    )
}