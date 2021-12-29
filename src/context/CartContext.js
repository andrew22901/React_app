import React, { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    
    

        
        let isInCart = products.some(product => product.id === product.id);
        

        
    

    const addProducts = (product) => {
        console.log(isInCart)
        if(isInCart === false) { 
        setProducts([...products, product])
    } 
    if(isInCart === true) { 
        console.log("cantidad actual", product.quantity)
        console.log("cantidad a sumar", product.value)

        let suma = product.quantity + product.value
        

       console.log("cantidad total",suma)

        
        
    }
       
    }
    
    

    const clearCart=()=>{
        
        setProducts([]);
    }



    
        
    
     
     

  

    const data = {
        products,
        addProducts,
        clearCart,
        isInCart
        //isInCart
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext

