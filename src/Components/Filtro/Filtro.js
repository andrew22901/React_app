
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


import Cargo from '../multimedia/Cargo-pants.jpg';
import Camiseta from '../multimedia/Camiseta.jpg';
import Jogger from '../multimedia/Sudadera.jpg';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import Item from "../Lista/Item/Item";



export default function Filtro({category}) {
    var Filtro = document.getElementById("Filtros")
    console.log(Filtro)

    const [loader, setLoader] = useState(true)

    const { categoria } = useParams()
   
   
    //
    const [pantalones, setPantalones ] = useState([
        
        
    ])
        
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

 

   

    const getprueba = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(pantalones)
        }, 1000)
    })


    const FiltroCamiseta = dataproducts.filter(function(element){
        return element.categoria === 1;
      });

      pantalones.push(FiltroCamiseta)
      
      

      console.log(pantalones)
      

 
//   
useEffect(() => {
    getprueba.then(resultsProducts => {
        resultsProducts.filter(resultProduct => {
            if (resultProduct.id === parseInt(categoria)) {
                setPantalones(resultProduct)
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
            <div className="Grid">
                {pantalones.map((item) => {
                        
                    return(
                        <div className='Cards'>
                        
                        <Item data={item}/>
                        
                        
                        
                        </div>
                        
                    );
                    
                })}
            </div>
            }
        </div>
    );
}


    





        
//<div>
            //{
            //loader
            //?
            //<Loader />
            //:
            //<div className="Grid">
                //{products.map((item) => {
                        
                   // return(
                      //  <div className='Cards'>
                        
                       // <Item data={item}/>
                        
                        
                        
                        //</div>
                        
                    //);
                    
               // })}
            //</div>
            //}
        //</div>
    //)
    
