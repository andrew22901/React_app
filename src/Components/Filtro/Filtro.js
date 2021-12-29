import React, { useState, useEffect } from 'react'
import '../Lista/Lista.css'

import Cargo from '../multimedia/Cargo-pants.jpg';
import Camiseta from '../multimedia/Camiseta.jpg';
import Jogger from '../multimedia/Sudadera.jpg';

import { useParams } from 'react-router-dom';
import Item from '../Lista/Item/Item';



const Filtro = () => {
    //
    const [loader, setLoader] = useState(true)
   
    //
    const [productoF, setproductoF ] = useState([
       
    ])
       
    const lista = []
       
    
    const { categoria } = useParams()
    
const dataProductos =[

        //nota: id de categoria
        // camiseta = 2
        // Pantalones = 1
        

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
            resolve(dataProductos)
        }, 1000)
    })

    useEffect(() => {
        getProducts.then(data => {
            data.filter(data => {
                if (data.categoria === parseInt(categoria)) {
                    console.log("holaa", data)
                    lista.push(data)
                    
                }else(console.log("no concuerda", data))
            })
            
        })
        
    }, [categoria])
//  

console.log("pro",productoF)
console.log("lista",lista)

    return(
        <div className="Grid">
            {lista.map((item) => {
                return(
                    <div className='Cards'>
                        <Item data={lista} />
                    </div>
                )
            })}
            <Item data={productoF}/>
        </div>
           
    )
    
}

export default Filtro