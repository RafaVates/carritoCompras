import { useContext } from 'react';
import Card  from '../components/Card'
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from "../context/CarritoContext";


const Home = () => {

    const {productos} = useContext(ProductosContext)
    const {carrito} = useContext(CarritoContext)
    const {agregarCompra, quitarCompra} = carrito

    const onAgregar = (compra)=>{
        agregarCompra(compra)

    }
    const onQuitar = (id)=>{
        quitarCompra(id)
    }
    

    return ( 
        <div>
            <h1>Compras</h1>
            <hr/>
            {productos.map(producto=>(
                <Card 
                    key={producto.product_id}
                    imagen={producto.image}
                    titulo={producto.name}
                    descripcion={producto.description}
                    precio={producto.price}
                    onAgregar={()=>onAgregar(producto)}
                    onQuitar={()=>onQuitar(producto.product_id)}
                    onAumentar={()=>onAumentar(producto.product_id)}
                    onDisminuir={()=>onDisminuir(producto.product_id)}
                />
            ))}
        </div>
     );
}
 
export default Home;