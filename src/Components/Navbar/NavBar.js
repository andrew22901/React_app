import React from "react";
import CartWidget from "./CartWidget/CartWitget";
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
        return(
            <nav className="menu">
            <label className="logo">StreetWear</label>
            <ul className="menu_items" >
                <li>
                    <Link to='/'>
                        <a>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <a>Productos</a>
                    </Link>
                </li>
                <li>   
                    <Link to='/about'>
                        <a>Nosotros</a>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <a>Contacto</a>
                    </Link>
                </li>
               
                <li>
                   
                        <CartWidget/>
                   
                </li>
                
                
                
            </ul>
        </nav>
        );
    
}





