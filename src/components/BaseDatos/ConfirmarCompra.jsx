import { addDoc, collection, Firestore } from "firebase/firestore/lite";
import { db } from "../../config/firebaseConfig";
import products from "../../js/productos";
import {useUser} from "../../context/UserContext"
import {useCart} from "../../context/CartContext"


export const confirmarCompra = async () => {
    const {user} = useUser()
    const { cart, cleanCart } = useCart();
  try {
    const comprasRef = collection(db, "Compras");
    const docRef = await addDoc(comprasRef, {
        comprador: {
            nombre: user?. name ?? "Usuario Desconocido",
            telefono: '1171950001',
            email:"mail@faketaxi.com"
        },
        productos: cart, 
        total: getTotal() ?? 0,
        fecha: new Date().toISOString()
    });
    cleanCart()
    alert("compra realizada")
    console.log("Documento agregado con ID:", docRef);
  } catch (error) {
    console.log("ocurrio un error: ", error);
  }
};

