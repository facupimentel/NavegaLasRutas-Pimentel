import React from "react";
import logoIg from "../../img/footer-contactos/instagram.png";
import logoFb from "../../img/footer-contactos/facebook.png";
import logoWp from "../../img/footer-contactos/whatsapp.png";
import logoX from "../../img/footer-contactos/x.png";
import { Link } from "react-router-dom";

export const Contactos = () => {
  const logos = [
    {
      id: 1,
      src: logoIg,
      url: "https://www.instagram.com/facundopimentel_/",
    },
    { src: logoFb, id: 2 },
    { src: logoWp, id: 3 },
    { src: logoX, id: 4, url: "https://x.com/facuupimentel_" },
  ];

  return (
    <main className="sec-contactos">
      <article className="texto">
        <h1>COMUNICATE CON NOSOTROS</h1>
        <p>
          Te dejamos nuestras redes donde podes seguirnos y contactarnos, aqui
          te podras enterar de nuestras novedades, nuestras rutinas, nuevos
          planes y todo acerca de los profesores que trabajan con nosotros. Te
          esperamos para poder ser parte de tus metas y logros.
        </p>
      </article>

      <div className="logos">
        {logos.map((logo) => (
          <div key={logo.id}>
            <Link to={`/contactos/${logo.url}`}>
              <img src={logo.src} alt={logo.src} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Contactos;
