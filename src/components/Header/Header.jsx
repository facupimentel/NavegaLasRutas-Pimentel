import React from 'react'
import NavBar from './NavBar';
import {useState} from 'react'
import { useUser } from '../../context/UserContext';
import { cargarProductos } from '../BaseDatos/AgregarProductos';

const Header = ({totalProductos}) => {
  const {user} = useUser()

  return (
    <>
      <NavBar totalProductos={totalProductos} />

      {user?.isLoggedIn && (
        <>
          <p
            style={{
              backgroundColor: "#242424",
              color: "#a1ef00",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Bienvenido {user.name}
          </p>

          <div>
            <button onClick={cargarProductos}>
              cargar productos a Firestore
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Header
