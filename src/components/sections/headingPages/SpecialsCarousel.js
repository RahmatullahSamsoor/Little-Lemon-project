import React from "react";
import {Carousel} from "react-responsive-carousel";
import bruschetta from "../../../assets/food/bruschetta.jpeg";
import greeksalad from "../../../assets/food/greek-salad.webp"
import lemondessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";


export default function CarouslePage(){

    return(

        <Carousel infiniteloop={true} autoplay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={bruschetta} name="Bruschetta" price="13.99" discription="Bread, mango, green onions, yougurt"/>
            <SpecialCard image={greeksalad} name= "Greek Salad" price="10.99" discription="cheese, Lemon,Tomato,Onion"/>
            <SpecialCard image={lemondessert} name= "Lemon Dessert" price="16.00" discription="Lemon, Bread,Iceing"/>
        </Carousel>
    );

}