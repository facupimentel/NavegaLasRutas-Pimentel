import React from 'react'
import NavBar from './NavBar';
import {useState} from 'react'

const Header = () => {

  const [totalProductos, setTotalProductos] = useState(0);

  const agregarAlCarrito = () => {
    setTotalProductos(totalProductos + 1);
  }; 

  return (
    <>
      <NavBar totalProductos={totalProductos} />
    </>
  );
}

export default Header
