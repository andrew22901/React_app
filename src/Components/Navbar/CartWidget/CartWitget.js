import React from "react";

import './CartWitget.css';
import { BsCart2 } from 'react-icons/bs';
class CartWidget extends React.Component {
    render() {
        return(
           <a href="#" className="Carrito"><BsCart2/></a> 
        )
    }
}

export default CartWidget


