import { Link } from "react-router-dom";


export default function Heading(){
    return (
        <header>
            <article className="action">
                <section className="herotext">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                on traditional recipes served with a modern twist.</p>
                <br/>
                <Link className="action-button" to="reservations">Reserve a table</Link>
                </section>
                <section className="hero-img">
                    <img src={require ("../../../assets/food/food1.png")} alt="Littel Lemon"/>
                </section>

            </article>
        </header>
    )
}