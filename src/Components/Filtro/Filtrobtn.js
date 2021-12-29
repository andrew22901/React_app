
import { Link } from "react-router-dom";
import React from 'react'
//



export default function Filtrobtn({data}) {
    console.log("categoria: ", data.categoria)
    return(
        <div>
        <h2>Filtrar por</h2>
        <Link to={`/category/${data.categoria}`}>
        <button className="agregar filtro">Pantalones</button>
        </Link>
        <Link to={`/category/${data.categoria}`}>
        <button  className="agregar filtro">Camisetas</button>
        </Link>
        

        
        </div>

    )}