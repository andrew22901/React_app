

import React, {useState} from "react";

import './ItemListContainer.css';


export default function ItemListContainer({ data }) {
    const[contador, setContador] = useState(0);
    

    const sumar = () => {contador < data.stock && setContador(contador + 1)}
    const restar = () => {contador > 1 && setContador(contador - 1)}

    
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
                                <div className="Counter">
                                    <h2>Cantidad</h2>
                                    <div className="Barra">
                                        <button className="btncounter" onClick={restar}>-</button>
                                        <div className="numero">{ contador }</div>
                                        <button className="btncounter" onClick={sumar}>+</button>
                                    </div>
                                </div>
                                <div className="btn">
                                <button className="agregar" id="">Agregar al carrito</button>
                                </div>
                            </div>          
            </div>
        </div>
        );
    
}



