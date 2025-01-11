import img1 from "../../img/footer-contactos/instagram.png";
import img2 from "../../img/footer-contactos/facebook.png"
import img3 from "../../img/footer-contactos/whatsapp.png"
import img4 from "../../img/footer-contactos/x.png"

const Footer = () => {
  return (
    <div>
        
          <footer>
              <div>
                  <a href="" target="_blank"><img src={img1} alt="Instragam logo" target="_blank"/></a>
                  <a href="" target="_blank"><img src={img3} alt="Whatsapp logo"/></a>
                  <a href="" target="_blank"><img src={img4} alt="Twitter logo"/></a>
                  <a href="" target="_blank"><img src={img2} alt="Facebook logo"/></a>
              </div>


              <h3>Copyright Pimentel Facundo ©</h3>
          </footer>

    </div>
  )
}

export default Footer
