

// eslint-disable-next-line react/prop-types
const CartWidget = ({totalProductos}) => {


  return (
    <div className="carrito-container"> 
      <div>
          <button id="carrito-btn" >Carrito 🛒 (<span id="cantidad-productos">{totalProductos}</span>)</button>
          <div id="carrito-dropdown" className="carrito-dropdown">
            <h3>Mi Carrito</h3>
            <ul id="carrito"></ul>
            <p id="total">Total: $0</p>
            <button id="comprar" className="btn">Comprar</button>
            <button id="vaciar-carrito" className="btn">Vaciar Carrito</button>
          </div>
      </div>

    </div>
  )
}

export default CartWidget
