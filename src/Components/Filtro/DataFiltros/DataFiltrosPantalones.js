import React, { useState, useEffect } from 'react'
import '../../Lista/Lista.css'
import Item from '../../Lista/Item/Item';
import Cargo from '../../multimedia/Cargo-pants.jpg';
import Loader from '../../Loader/Loader';
import Jogger from '../../multimedia/Sudadera.jpg';
import ItemCounter from '../../ItemCounter/ItemCounter';



const DataFiltrosPantalones= () => {
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
        },
        
        {   
            img: Cargo,
            nombre: 'Pantalones Cargo',
            precio: 120,
            stock: 15,
            id: 3
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
                        <ItemCounter data={item}/>
                        
                        </div>
                        
                    );
                    
                })}
            </div>
            }
        </div>
    )
    
}

export default DataFiltrosPantalones