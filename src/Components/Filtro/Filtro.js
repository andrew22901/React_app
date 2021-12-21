import React from "react";
import { Link } from "react-router-dom";
export default function Filtro() {
    var Filtro = document.getElementById("Filtros")
    console.log(Filtro)
    return(
        <div>
        <h2>Filtrar por</h2>
        <Link to='/Categoey/Pantalones'>
        <button className="agregar filtro">Pantalones</button>
        </Link>
        <Link to='/Categoey/Camisetas'>
        <button className="agregar filtro">Camisetas</button>
        </Link>
        
        </div>
    );
}