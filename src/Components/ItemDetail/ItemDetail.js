import React from "react";

import './ItemDetail.css'

export default function ItemDetail( {data} ) {
    return(
        <div >
            
            <h1>{data.nombre}</h1>
            <div className="box">
                <img className="detailimg" alt="img" src={data.img}/>
                <div className="info">
                    <h1>{data.nombre} StreetWear Classic</h1>
                    <h2 className="precio">precio: {data.precio} USD </h2>
                    <h2>Stock: {data.stock}  </h2>
                    <button className="agregarDetail" id="">Comprar</button> 
                </div>
            </div>
        </div>
    )
}