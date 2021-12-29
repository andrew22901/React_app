

import React from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../../ItemCounter/ItemCounter";
import './Item.css';


export default function Item( {data} ) {
    
    console.log("hola2",data.nombre)
    
    const onAdd = (value, name) => {
        console.log("items agregados: ", value)
        
        console.log(name)
    }
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
                                <ItemCounter stock={data.stock} onAdd={onAdd}/>
                                <div className="btn">
                                    <Link to={`/products/${data.id}`}>
                                <button className="agregar" id="">Mas Informacion</button>
                                    </Link>
                                </div>
                            </div>          
            </div>
        </div>
        );
    
}



