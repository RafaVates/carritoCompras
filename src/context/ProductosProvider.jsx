import React, {useState, useEffect} from 'react'
import { URL_SHOP } from '../config/env'
import { ProductosContext } from "./ProductosContext";


const ProductosProvider = ({children}) => {

    const[productos, setProductos] = useState([])

    useEffect(()=>{
        const fetchProductos =async()=>{
            const response = await fetch(`${URL_SHOP}/api/products`)
            const data = await response.json()
            setProductos(data)
        }
        fetchProductos()
    },[])


    return ( 
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
     );
}
 
export default ProductosProvider;