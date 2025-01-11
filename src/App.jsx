import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import MainProductos from "./components/Productos/MainProductos";
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
        <Header/>

        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/productos' element={<MainProductos/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
