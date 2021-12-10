import React from "react";
import CartWidget from "./CartWidget/CartWitget";
import './Navbar.css';

export default function Navbar() {
    
        return(
            <nav className="menu">
            <label className="logo">StreetWear</label>
            <ul className="menu_items">
                <li className="active"><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Desarrollos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
        );
    
}





