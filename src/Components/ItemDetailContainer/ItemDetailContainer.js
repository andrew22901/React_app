import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'

import Jogger from '../multimedia/Sudadera.jpg';

import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';


const Lista = () => {
    //
    const [loader, setLoader] = useState(true)
    //
    const [products, setProducts ] = useState([
    

        {   
            img: Jogger,
            nombre: 'Jogger',
            precio: 100,
            stock: 10,
            id: 1
        }
        
    ]);
//
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])
//

    return(
        <div>
            {
            loader
            ?
            <Loader />
            :
            <div className="GridDetail">
                {products.map((item) => {
                        
                    return(
                        <div className='CardsDetail'>
                        <ItemDetail data={item}/>
                        
                        
                        </div>
                        
                    );
                    
                })}
            </div>
            }
        </div>
    )
    
}

export default Lista