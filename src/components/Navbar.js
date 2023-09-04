import { useState } from 'react';
import Navigation from './Navigation';
import Humburger from '../assets/hamburger.png';
import close from '../assets/close.png';
import logo from '../assets/head logo.png';
// import {Link} from 'react-router-dom';


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handle(){
        setNavbarOpen(!navbarOpen);
    }


    return (
        <nav>
        <nav className="burger">
            <img src={logo} alt='Littel Lemon Logo' className='navlogo'/>
            <button className='burger-icon' onClick={handle}>
                <img src={navbarOpen ? close : Humburger} alt='Navigation Bar'/>
            </button>

        </nav>
        <Navigation device="desktop"/>
        {navbarOpen ? <Navigation device="mobile"/> : ""}
        </nav>
    );
};

export default Navbar;