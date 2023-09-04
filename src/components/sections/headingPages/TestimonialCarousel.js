import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Micheal Boon" discription="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Macal Mondy" discription="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Pasey Lucas" discription="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="John Rondam" discription="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Mayar Azizi" discription="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard name="Brian Dean" discription="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Tyler Tohmine" discription="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard name="Jack Hu" discription="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
             </Carousel>
    )
}