import { Routes , Route, Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Home from './routes/Home'
import Cart from './routes/Cart'
import ProductosProvider from './context/ProductosProvider'
import CarritoProvider from './context/CarritoProvider'

function App() {
  
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to='/'/>} />
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}

export default App
