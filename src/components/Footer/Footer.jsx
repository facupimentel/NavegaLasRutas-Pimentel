import img1 from "../../img/footer-contactos/instagram.png";
import img2 from "../../img/footer-contactos/facebook.png"
import img3 from "../../img/footer-contactos/whatsapp.png"
import img4 from "../../img/footer-contactos/x.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <a href="https://www.instagram.com/facundopimentel_" target="_blank">
            <img src={img1} alt="Instragam logo" target="_blank" />
          </a>
          <a
            href="https://www.facebook.com/facundo.pimentel?locale=es_LA"
            target="_blank"
          >
            <img src={img2} alt="Facebook logo" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5493813203241&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={img3} alt="Whatsapp logo" />
          </a>
          <a href="https://x.com/facuupimentel_" target="_blank">
            <img src={img4} alt="Twitter logo" />
          </a>
        </div>

        <h3>Copyright Pimentel Facundo ©</h3>
      </footer>
    </div>
  );
}

export default Footer
