import Carousle from "./SpecialsCarousel";


import bruschetta from "../../../assets/food/bruschetta.jpeg";
import greeksalad from "../../../assets/food/greek-salad.webp"
import lemondessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";


export default function Special(){

    return(
        <section className="specials">
            <article className="specials-topbar">
                <h1>This week special</h1>
                <a className="action-button" href={require ("../../../assets/menu.webp")} target="_blank" rel="noreferrer">Online menu</a>

            </article>

        <section className="specials-cards">
            <SpecialCard image={bruschetta} name="Bruschetta" price="$13.99" discription="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
            salt and olive oil."/>
            <SpecialCard image={greeksalad} name= "Greek Salad" price="$10.99" discription="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
            Dressed with salt, hot pepper, and olive oil"/>
            <SpecialCard image={lemondessert} name= "Lemon Dessert" price="$15.90" discription="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
            and lemon zest"/>
        </section>
        <section className="specials-carousel">
            <Carousle/>
        </section>
        </section>
    );

}