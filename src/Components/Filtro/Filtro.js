import React from "react";
import { Link } from "react-router-dom";
export default function Filtro({category}) {
    var Filtro = document.getElementById("Filtros")
    console.log(Filtro)
    return(
        <div>
        <h2>Filtrar por</h2>
        <Link to='/category/1'>
        <button className="agregar filtro">Pantalones</button>
        </Link>
        <Link to='/category/2'>
        <button className="agregar filtro">Camisetas</button>
        </Link>
        
        </div>
    );
}