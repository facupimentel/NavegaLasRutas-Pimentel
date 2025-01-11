import React from "react";
import lewan from "../../img/inicio/lewan.jpg";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <section className="box-one">
        <div className="texto">
          <h1>BIENVENIDOS A NUESTRA ACADEMIA</h1>
          <p>
            Te damos la bienvenida a nuestra academia deportiva Voltex, donde
            podras entrenarte en cualquier disciplina de alto rendimiento, ya
            sea si sos un atleta experimentado o si queres empezar desde cero.
            En Voltex tenemos profesionales en cada deportes que busques, te
            brindamos rutinas y asesoramientos personalizados, cualquier tipo
            d+e indumentaria y un foro para que puedas interactuar con
            profesores y alumnos. Te deseamos las mejores de las experiencias en
            tu camino a tu mejor version.
          </p>
        </div>
      </section>

      <section className="sec-img">
        <img src={lewan} alt="" />
      </section>
    </div>
  );
};

export default Inicio;
