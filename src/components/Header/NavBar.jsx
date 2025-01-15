import { Link, NavLink } from "react-router-dom"
import logo from "../../img/header/logo1.png"
import CartWidget from "./CartWidget"



const NavBar = ({totalProductos}) => {

  return (
    <>
      <header>
        <nav className="navbar">
          <img src={logo} alt="" />
          <ul>
            <li><NavLink to="/" className={({isActive})=>(isActive ? 'active' : '')}>Inicio</NavLink></li>
            <li><NavLink to="/productos" className={({isActive})=>(isActive ? 'active' : '')}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" className={({isActive})=>(isActive ? 'active' : '')}>Nosotros</NavLink></li>
            <li><NavLink to="/contactos" className={({isActive})=>(isActive ? 'active' : '')}>Contactos</NavLink></li>
          </ul>

          <CartWidget totalProductos={totalProductos} />
        </nav>
      </header>
    </>
  );
}

export default NavBar
