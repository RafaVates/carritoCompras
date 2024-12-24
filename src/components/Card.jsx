import { useState } from "react";
import '../styles/Card.css'


const Card = ({imagen,titulo, descripcion, precio, onAgregar, onQuitar, onAumentar, onDisminuir }) => {

    const [added, setAdded] = useState(false)

    const handleAgregar = () => {
        onAgregar()
        setAdded(true)
    }

    const handleQuitar = () => {
        onQuitar()
        setAdded(false)
    }

    return ( 
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {added ? 
                    <button 
                        className="boton-quitar"
                        type="button"
                        onClick={handleQuitar}
                    >
                        Quitar del carrito
                    </button>
                    :
                    <button 
                        className="boton-agregar"
                        type="button"
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </button>
                }
            </div>
        </div>
     );
}
 
export default Card;