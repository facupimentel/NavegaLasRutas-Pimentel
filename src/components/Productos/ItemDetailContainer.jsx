import React, { useEffect } from "react";
import { useState } from "react";
import products from "../../js/productos";
import { useParams } from "react-router-dom";

const fetchProductos = (id) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const producto = products.find((p) => p.id === parseInt(id))
      if(producto){
        resolve(producto)
      } else {
        reject("producto no encontrado")
      }
    }, 1000)
  }) 
}


const ItemDetailContainer = ({ agregarAlCarrito }) => {
  
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1)

  const incrementar = () => setCantidad((prev) => Math.min(prev + 1, 10))
  const decrementar = () => setCantidad((prev) => Math.max(prev - 1, 10));


  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setCargando(true)
    fetchProductos(id)
      .then((data)=>{
        setProducto(data)
        setError(null)
      })
      .catch((error)=>{
        setProducto(null)
        setError(error)
      })
      .finally(()=>{
        setCargando(false)
      })
  }, [id])


  if(cargando){
    return <p style={{
      textAlign:"center"
    }}>Cargando producto</p>
  }

  if(error){
    return <p style={{ color: "red" }}>{error}</p>;
  }





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
            onClick={decrementar}
            disabled={cantidad === 1}
          >
            {" "}
            -
          </button>

          <span>{cantidad}</span>

          <button
            className="sumar"
            onClick={incrementar}
            disabled={cantidad === 10}
          >
            {" "}
            +
          </button>
        </div>
        <button onClick={()=>agregarAlCarrito(cantidad)} className="btn-comprar">
          Comprar
        </button>
      </div>
      ))
    </>
  );
};

export default ItemDetailContainer;
