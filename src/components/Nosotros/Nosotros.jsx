import React from 'react'
import cbum from '../../img/nosotros/cbum1.jpg'
import canelo from "../../img/nosotros/canelo.jpg";
import beckham from "../../img/nosotros/beckham.jpg";

const alumnos = [
  {
    id: 1,
    nombre: "cbum",
    src: cbum,
  },
  {
    id: 2,
    nombre: "canelo",
    src: canelo,
  },
  {
    id: 3,
    nombre: "beckham",
    src: beckham,
  },
];

const Nosotros = () => {
  return (
    <main>
      <article class="texto">
        <h1>Sobre Nosotros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus
          natus incidunt accusantium eaque sunt enim quasi doloremque sed
          repudiandae est in recusandae nihil, fugiat, labore cumque vero
          laborum iusto. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maiores illum accusantium ipsum nemo, officiis est quia deserunt
          nam reiciendis. Odio inventore ex nam sit itaque delectus eaque ab eos
          voluptatibus?
        </p>
      </article>

      <div className="nos-alumnos">
        {alumnos.map((alumno) => (
          <div className="alumno" key={alumno.id}>
            <img src={alumno.src} alt={alumno.src} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Nosotros
