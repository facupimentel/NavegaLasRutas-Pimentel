import React from "react";
import { useState } from "react";
import products from "../../js/productos";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ inicial = 1, agregarAlCarrito }) => {
  const [counts, setCounts] = useState(
    products.reduce((acc, producto) => {
      acc[producto.id] = inicial;
      return acc;
    }, {})
  );

  const [selectProducto, setSelectProducto] = useState(null);

  const handleProductoClick = (producto) => {
    setSelectProducto(producto);
  };

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

  const volverMenu = () => {
    setSelectProducto(null);
  };

  const { id } = useParams();
  const producto = products.find((p) => p.id === parseInt(id));

  return (
    <>
      <div className="detalle-producto">
        <h2 key={producto.id}>ID: {id ? id : ""}</h2>
        <img src={producto.imagen} alt="" />
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>

        <div className="botonera">
          <button
            className="restar"
            onClick={() => decrementar(producto.id)}
            disabled={counts[producto.id] === 1}
          >
            {" "}
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
            {" "}
            +
          </button>
        </div>
        <button onClick={agregarAlCarrito} className="btn-comprar">
          Comprar
        </button>
      </div>
      ))
    </>
  );
};

export default ItemDetailContainer;
