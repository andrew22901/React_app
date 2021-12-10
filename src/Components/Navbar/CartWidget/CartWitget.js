import React from "react";
import './CartWitget.css';
import cart from './carrito-de-compras.png';


export default function CartWidget () {
    
        return(
           <a href="#" > <img className="Carrito" src={cart} alt="carrito"></img></a> 
        )
    
}
