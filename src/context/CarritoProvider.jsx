import React, { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";


const initialState =[]

const CarritoProvider = ({children}) => {
    

    const comprasReducer = (state=initialState, action={}) => {
        switch (action.type) {
            case '[CARRITO] AGREGAR_PRODUCTO':
                return [...state, action.payload]
            case '[CARRITO] QUITAR_PRODUCTO':
                return state.filter(compra => compra.product_id !== action.payload)
            case '[CARRITO] AUMENTAR_CANTIDAD':
                return state.map(item => {
                    if(item.product_id === action.payload){
                        return {...item, cantidad: item.cantidad + 1}
                    }
                    return item
                })
            case '[CARRITO] DISMINUIR_CANTIDAD':
                return state.map(item => {
                    if(item.product_id === action.payload && item.cantidad > 1){
                        return {...item, cantidad: item.cantidad - 1}
                    }
                    return item
                })
            default:
                return state
        }
    }
    
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        compra.cantidad=1

        const action = {
            type: '[CARRITO] AGREGAR_PRODUCTO',
            payload: compra
        }
        dispatch(action)
    }
    const quitarCompra = (id) => {
        const action = {
            type: '[CARRITO] QUITAR_PRODUCTO',
            payload: id
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] AUMENTAR_CANTIDAD',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] DISMINUIR_CANTIDAD',
            payload: id
        }
        dispatch(action)
    }

    

    const carrito = {
        listaCompras,
        agregarCompra,
        quitarCompra,
        aumentarCantidad,
        disminuirCantidad
    }

    return ( 
        <CarritoContext.Provider value={{carrito}}>
            {children}
        </CarritoContext.Provider>
     );
}
 
export default CarritoProvider;