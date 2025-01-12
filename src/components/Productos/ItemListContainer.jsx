import { useState } from "react";
import products from "../../js/productos";
import { Link } from "react-router-dom";


const ItemListContainer = () => {
  

  return (
    <>
      <section className="sec-productos" >
        <div class="texto">
          <h1>Bienvenidos a nuestra Tienda Online</h1>
        </div>
        <article className="productos">
          {products.map((producto) => (
            <div key={producto.id} className="producto">
              <Link to={`/detalle/${producto.id}`}>
                <img src={producto.imagen} alt={producto.nombre} />
              </Link>
              <h2>{producto.nombre}</h2>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default ItemListContainer;
