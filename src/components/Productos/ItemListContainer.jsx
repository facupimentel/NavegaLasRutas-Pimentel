import { useState } from "react";
import products from "../../js/productos";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ inicial = 1, agregarAlCarrito }) => {
  const [counts, setCounts] = useState(
    products.reduce((acc, producto) => {
      acc[producto.id] = inicial;
      return acc;
    }, {})
  );

  const incrementar = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrementar = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] - 1,
    }));
  };

  return (
    <div>
      <h1>Bienvenidos a nuestra Tienda Online</h1>
      <article className="productos">
        {products.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <div className="botonera">
              <button
                className="restar"
                onClick={() => decrementar(producto.id)}
                disabled={counts[producto.id] === 1}
              >
                -
              </button>

              <span>{counts[producto.id]}</span>

              <button
                className="sumar"
                onClick={() => {
                  incrementar(producto.id);
                }}
                disabled={counts[producto.id] === 10}
              >
                +
              </button>
            </div>
            <button onClick={agregarAlCarrito}>Comprar</button>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ItemListContainer;
