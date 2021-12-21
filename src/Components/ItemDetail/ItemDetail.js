import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ItemDetail( {data} ) {
    const [quantityItem, setQuantityItem] = useState(0)
    const [itemCart, setItemCart] = useState(
        {
            name: data.nombre,
            id: data.id,
            quantity: 0
        }
    )

    const onAdd = (value, name) => {
        console.log("items agregados: ", value)
        itemCart.quantity = value
        console.log(name)
    }

    const sendItem = () => {
        console.log("itemCart: ", itemCart)
    }

    return(
        <div >
            
            <h1>{data.nombre}</h1>
            <div className="box">
                <img className="detailimg" alt="img" src={data.img}/>
                <div className="info">
                    <h1>{data.nombre} StreetWear Classic</h1>
                    <h2 className="precio">precio: {data.precio} USD </h2>
                    <h2>Stock: {data.stock}  </h2>
                    <ItemCounter stock={data.stock}  onAdd={onAdd}/>

                    <Link to='/cart'>
                        <button onClick={sendItem} className="agregarDetail" id="">Comprar</button> 
                    </Link>

                </div>
            </div>
        </div>
    )
}