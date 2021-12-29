import React, {useState, useEffect, useContext} from 'react'
import './CartWitget.css';
import cart from './carrito-de-compras.png';
import x from '../../multimedia/x.png'

import CartContext from '../../../context/CartContext';


const CartWidget = () => {
    const [showCart, setShowCart ] = useState("box-cart2");
    const changeStyle = () => {
        setShowCart("box-cart")
    }
    const { id, products, clearCart } = useContext(CartContext)
    const changeStylehide = () => {
        setShowCart("box-cart2")
    }
    useEffect(() => {
        //console.log("products cartWidget" , products)
    })
    

    const eliminar = () => {
        console.log("call",id)
    }

    const elminarCart = () => {
        clearCart(products)
    }
    
    
  


        
      
      
    

    return(
        <div className="cart-container">
             <img className="Carrito" src={cart} alt="carrito" id="btn"  onClick={changeStyle}></img> 
            <div className={showCart}>
            <div><button className="hide" onClick={changeStylehide}>hide</button></div>
            <div className='item-cart-list'>
                            <div className='item-cart-img'>
                                <p>Imagen</p>
                            </div>
                            <p>Nombre</p>
                            <p>Precio</p>
                            <span>Cantidad</span>
                            <p>Eliminar</p>
                        </div>
                {products.map((product) => {
                    
                    return(
                        <div className='item-cart-list' key={product.id}>
                            <div className='item-cart-img'>
                                <img  src={`${product.img}`} />
                            </div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <span>Cant: {product.quantity}</span>
                            <div className='x'>
                                <img className='x' src={x} onClick={eliminar} alt='eliminar del carrito'></img>
                            </div>
                        </div>
                    )
                })}
                <button onClick={elminarCart}>clear</button>
            </div>
        </div>
    )
}

export default CartWidget