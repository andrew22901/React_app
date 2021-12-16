import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import Cargo from '../multimedia/Cargo-pants.jpg';
import Camiseta from '../multimedia/Camiseta.jpg';
import Jogger from '../multimedia/Sudadera.jpg';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    //
    const [loader, setLoader] = useState(true)
    //
    const [products, setProducts ] = useState([]);
    //
    const { id } = useParams()

    const dataproducts = [

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
        
    ]
//
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataproducts)
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

    useEffect(() => {
        getProducts.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    setProducts(resultProduct)
                    setLoader(false)
                }
            })
        })
    }, [id])
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
                        <ItemDetail data={products}/>
                        
                        
                        </div>
                        
                    );
                    
                })}
            </div>
            }
        </div>
    )
    
}

export default ItemDetailContainer