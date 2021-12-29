import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";

export default function ItemDetail( {data}, ) {
    const [quantityItem, setQuantityItem] = useState(0)
    const { addProducts, products, isInCart } = useContext(CartContext)
 
    
    const [itemCart, setItemCart] = useState(
        {
            name: data.nombre,
            id: data.id,
            quantity: 0,
            price: data.precio,
            img: data.img,
            value: 0
        }
    )

    const onAdd = (value, name) => {
        console.log("items agregados: ", value)
        
        itemCart.value = value
        console.log(name)
    }
    
    
    
    const button = () => {
        
     
        addProducts(itemCart)
        
        console.log("productos agregados: ", products)
        
       
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
                    <ItemCounter stock={data.stock}  onAdd={onAdd }/>

                    
                    <button  onClick={button} className="agregarDetail" id="boton">Agregar al carrito</button> 
                     

                    <Link to='/'>
                        <button  className="agregarDetail">Seguir comprando</button>
                    </Link>
                    

                </div>
            </div>
        </div>
    )
}