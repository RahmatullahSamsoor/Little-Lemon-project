import React from "react";
import {Link} from "react-router-dom";
import footer from '../assets/footer-logo.png';

function Footer () {
    return (
        <footer>
            <menu>
                <li className="footer-img">
            <img src={footer} alt="Logo"/>
            </li>
            <li className="contact">
                <h1 className="footer-header">Navigation</h1>
                <ul className="footer-links">
                    <Link to='/'>Home</Link>
                    <Link to="/about">About</Link>
                    <a href={require ("../assets/menu.webp")}
                    target="_blank"
                    rel="noreferrer"
                    >
                        Menu
                    </a>
                    <Link to="/reservations">Reservation</Link>
                    <Link to='/order'>Order</Link>
                    <Link to="login">Login</Link>

                </ul>
            </li>
            <li>
                <h1 className="footer-header">Contact</h1>
                <ul className="footer-links">
                    <li>36142 Thouwbalshof 1,</li>
                    <li>Tann, Fulda</li>
                    <br/>
                    <li>+49 (777) 369 632</li>
                    <br/>
                    <a
                    href="mailto: info.tann@littlelemon.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                        info.tann@littlelemon.com
                    </a>
                </ul>

            </li>
            <li>
                <h1 className="footer-header">Contact</h1>
                <ul className="footer-links">
                    <a href="https://www.facebook.com/thelittlelemonshop/"
                    target="_blank"
                    rel="noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/littlelemonmoon/"
                    target="_blank"
                    rel="noreferrer">Instagram</a>
                    <a href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                    target="_blank"
                    rel="noreferrer">Join us!</a>
                </ul>
            </li>

            </menu>

        </footer>
    )
}

export default Footer;