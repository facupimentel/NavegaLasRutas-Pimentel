import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import MainProductos from "./components/Productos/MainProductos";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import Contactos from "./components/Contactos/contactos";
import Footer from "./components/Footer/Footer";



import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<MainProductos />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<h1>Error 404: Pagina no encontrada.</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
