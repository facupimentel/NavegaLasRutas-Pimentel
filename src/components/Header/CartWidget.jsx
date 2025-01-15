import { useState } from "react";



const CartWidget = ({totalProductos}) => {
 
  const [carritoVisible, setCarritoVisible] = useState(false);
  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="carrito-container">
      <div>
        <button id="carrito-btn" onClick={toggleCarrito}>
          Carrito 🛒 (<span id="cantidad-productos">{totalProductos}</span>)
        </button>
        <div
          id="carrito-dropdown"
          className={`carrito-dropdown ${
            carritoVisible ? "visible" : "hidden"
          }`}
        >
          <h3>Mi Carrito</h3>
          <ul id="carrito"></ul>
          <p id="total">Total: $0</p>
          <button id="comprar" className="btn">
            Comprar
          </button>
          <button id="vaciar-carrito" className="btn">
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartWidget
