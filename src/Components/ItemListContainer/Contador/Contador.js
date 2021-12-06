import React, {useState} from "react";
import './Contador.css';

export default function Contador() {
    const[contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1)

   
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
