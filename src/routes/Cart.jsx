import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Cart = () => {


    const {carrito} = useContext(CarritoContext)
    const {listaCompras, quitarCompra, aumentarCantidad, disminuirCantidad} = carrito
    // console.log(listaCompras)

    const calcularTotal = ()=>{
        return listaCompras.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImprimir = ()=>{
        print()
        // abrir un modal con la factura 
    }
    
    return ( 
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map(producto=>(
                        <tr key={producto.product_id}>
                            <td>{producto.name}</td>
                            <td>{producto.price}</td>
                            <td>
                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={()=>aumentarCantidad(producto.product_id)}
                                >
                                    +
                                </button>
                                <button className="btn btn-primary">
                                    {producto.cantidad} 
                                </button>
                                <button 
                                    className="btn btn-outline-danger"
                                    onClick={()=>disminuirCantidad(producto.product_id)}
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={()=>quitarCompra(producto.product_id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <b>TOTAL:</b>
                        </td>
                        <td>
                            {calcularTotal()}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleImprimir}
                    disabled={listaCompras.length === 0}
                >
                        Comprar
                </button>
            </div>
        </>
     );
}
 
export default Cart;