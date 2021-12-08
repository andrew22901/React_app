import React, { useState } from 'react'
import './Lista.css'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cargo from '../multimedia/Cargo-pants.jpg';
import Camiseta from '../multimedia/Camiseta.jpg';
import Jogger from '../multimedia/Sudadera.jpg'


const Lista = () => {
    
    const [products, setProducts] = useState([
    

        {   
            img: Jogger,
            nombre: 'Jogger',
            precio: 100,
            stock: 10,
            id: 1
        },
        {   
            img: Camiseta,
            nombre: 'Camiseta',
            precio: 30,
            stock: 5,
            id: 1
        },
        {   
            img: Cargo,
            nombre: 'Pantalones Cargo',
            precio: 120,
            stock: 15,
            id: 1
        }
        
        
    ]);



    return(
        <div className="Grid">
            {products.map((itemListContainer) => {
                return(
                    <ItemListContainer data={itemListContainer}/>
                );
                
            })}
        </div>
    )
    
}

export default Lista