

import React from "react";

import './Item.css';


export default function Item({ data }) {
    
        return(
        <div>
            <div className="Container">
                <div>
                <img alt="Sudadera"className="imagen" src={data.img}/>
                </div>
                            <div className="text">
                                <p>Stock: {data.stock} </p>
                                <h2>Nombre de producto: {data.nombre}</h2>
                                <h3>Precio: {data.precio} USD</h3>
                                <div className="btn">
                                <button className="agregar" id="">Mas Informacion</button>
                                </div>
                            </div>          
            </div>
        </div>
        );
    
}



