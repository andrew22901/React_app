import React, { useState, useEffect } from 'react'
import Cargo from '../../multimedia/Cargo-pants.jpg';
import Camiseta from '../../multimedia/Camiseta.jpg';
import Jogger from '../../multimedia/Sudadera.jpg';
import Loader from '../../Loader/Loader';
import { useParams } from 'react-router-dom';
import '../../ItemDetailContainer/ItemDetailContainer.css'

import ItemListContainer from '../../Lista/ItemListContainer/ItemListContainer';


export default function ItemDetailContainer() {
    //
    const [loader, setLoader] = useState(true)
    //
    const [products, setProducts ] = useState([]);
    //
    const { categoria } = useParams()

    const dataproducts = [

        {   
            img: Jogger,
            nombre: 'Jogger',
            precio: 100,
            stock: 10,
            id: 1,
            categoria: 1
        },
        {   
            img: Camiseta,
            nombre: 'Camiseta',
            precio: 30,
            stock: 5,
            id: 2,
            categoria: 2
        },
        {   
            img: Cargo,
            nombre: 'Pantalones Cargo',
            precio: 120,
            stock: 15,
            id: 3,
            categoria: 1
        }
        
    ]
//
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataproducts)
        }, 1000)
    })

   

    useEffect(() => {
        getProducts.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.categoria === parseInt(categoria)) {
                    setProducts(resultProduct)
                    setLoader(false)
                }
            })
        })
    }, [categoria])
//

    return(
        <div>
            {
            loader
            ?
            <Loader />
            :
            <ItemListContainer data={products}/>
            
                        
            }
        </div>
            
    
    );
        }
