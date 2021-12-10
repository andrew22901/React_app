import React, {useState} from "react";
import './ItemCounter.css';

export default function ItemCounter({data}){
    const[contador, setContador] = useState(0);
    

    const sumar = () => {contador < data.stock && setContador(contador + 1)}
    const restar = () => {contador > 1 && setContador(contador - 1)}

    return(
        <div className="Counter">
            <h2>Cantidad</h2>
            <div className="Barra">
                <button className="btncounter" onClick={restar}>-</button>
                <div className="numero">{ contador }</div>
                <button className="btncounter" onClick={sumar}>+</button>
            </div>
        </div>
    );
}