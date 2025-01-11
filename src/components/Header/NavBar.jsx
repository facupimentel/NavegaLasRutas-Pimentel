import { Link, NavLink } from "react-router-dom"
import logo from "../../img/header/logo1.png"
import CartWidget from "./CartWidget"


// eslint-disable-next-line react/prop-types
const NavBar = ({totalProductos}) => {

    
    

  return (
    <>
      <header>
        <nav className="navbar">
          <img src={logo} alt="" />
          <ul>
            {/* <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/productos'>Productos</Link></li> */}
            {/* <li><Link to='/'>Contacto</Link></li> */}

            <li><NavLink to="/" className={({isActive})=>(isActive ? 'active' : '')}>Inicio</NavLink></li>
            <li><NavLink to="/productos" className={({isActive})=>(isActive ? 'active' : '')}>Productos</NavLink></li>
          </ul>

          <CartWidget totalProductos={totalProductos} />
        </nav>
      </header>
    </>
  );
}

export default NavBar
