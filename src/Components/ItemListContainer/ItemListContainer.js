

import React from "react";
import Sudadera from './Sudadera.jpg';
import './ItemListContainer.css';
import Contador from "./Contador/Contador";

class ItemListContainer extends React.Component {
    render() {
        return(
        <div>
            <div class="Container">
                <div>
                <img className="imagen" src={Sudadera}/>
                </div>
                            <div className="text">
                                <h2>Nombre de producto: Sudadera</h2>
                                <h3>Precio: 100 USD</h3>
                                <h3>ID: 1</h3>
                                <Contador />
                                <div className="btn">
                                <button className="agregar" id="">Agregar al carrito</button>
                                </div>
                            </div>          
            </div>
        </div>
        )
    }
}

export default ItemListContainer

