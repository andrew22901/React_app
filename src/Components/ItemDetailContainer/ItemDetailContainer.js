import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import Cargo from '../multimedia/Cargo-pants.jpg';
import Camiseta from '../multimedia/Camiseta.jpg';
import Jogger from '../multimedia/Sudadera.jpg';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
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
            id: 2
        },
        {   
            img: Cargo,
            nombre: 'Pantalones Cargo',
            precio: 120,
            stock: 15,
            id: 3
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
            <ItemDetail data={products}/>
                        
            }
        </div>
            
    
    );
        }
