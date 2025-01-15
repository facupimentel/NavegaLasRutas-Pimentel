import { useEffect, useState } from "react";
import products from "../../js/productos";
import { Link } from "react-router-dom";



const fetchDatos = () =>{
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      const product = products.find((p) => p.id === id)
      if(product){
        resolve(product)
      } else{
        reject("producto no encontrado")
      }
    }, 5000)
  })
}


const ItemListContainer = () => {

  const [cargando, setCargando] = useState("Cargando...")
  
  useEffect(()=>{
    fetchDatos()
      .then((response)=> setCargando(response))
      .then((data)=> window.location.href = `/detalle/${id}`)
  })

  
  return (
    <>
      <section className="sec-productos">
        <div class="texto">
          <h1>Bienvenidos a nuestra Tienda Online</h1>
        </div>



        <article className="productos">
          {products.map((producto) => (
            <div key={producto.id} className="producto">
              <Link to={`/detalle/${producto.id}`}>
                <img src={producto.imagen} alt={producto.nombre} onClick={()=> handleProductoClick(producto.id)}/>
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
