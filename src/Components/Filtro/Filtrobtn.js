
import { Link } from "react-router-dom";
import React from 'react'




export default function Filtrobtn({category}) {
    return(
        <div>
        <h2>Filtrar por</h2>
        <Link to={`/category/1`}>
        <button className="agregar filtro">Pantalones</button>
        </Link>
        <Link to='/category/2'>
        <button  className="agregar filtro">Camisetas</button>
        </Link>
        

        
        </div>

    )}