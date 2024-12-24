import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const NavBar = () => {


    const {carrito} = useContext(CarritoContext)
    const {listaCompras} = carrito
    
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Shopping Cart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-current="page">Compras</NavLink>
                        </li> 
                    </ul>
                    <NavLink to='/cart'> 
                        <Badge badgeContent={listaCompras.length} color="primary">
                            <ShoppingCart color="action"/>
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;