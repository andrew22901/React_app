import React, { useState, useEffect } from 'react'
import '../../Lista/Lista.css'
import Item from '../../Lista/Item/Item';
import Camiseta from '../../multimedia/Camiseta.jpg';
import Loader from '../../Loader/Loader';

import ItemCounter from '../../ItemCounter/ItemCounter';



const DataFiltrosCamisetas= () => {
    //
    const [loader, setLoader] = useState(true)
    //
    const [products, setProducts ] = useState([
    

        {   
            img: Camiseta,
            nombre: 'Camiseta',
            precio: 30,
            stock: 5,
            id: 2
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
            <div className="Grid">
                {products.map((item) => {
                        
                    return(
                        <div className='Cards'>
                        <Item data={item}/>
                        
                        
                        </div>
                        
                    );
                    
                })}
            </div>
            }
        </div>
    )
    
}

export default DataFiltrosCamisetas