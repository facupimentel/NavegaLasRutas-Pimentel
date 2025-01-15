import React from 'react'
import NavBar from './NavBar';
import {useState} from 'react'

const Header = ({totalProductos}) => {
  return (
    <>
      <NavBar totalProductos={totalProductos} />
    </>
  );
}

export default Header
