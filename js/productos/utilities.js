import { Productos } from "./db_productos.js";
import { productoItem } from "./productosMostrador_item.js";
import { productoCestaItem } from "./productosCesta_item.js";
import { carrito } from "../index.js";


/* --------------------------------------------------------------------------------*/
/* inicializa el grid con las cards de productos disponibles                       */
/* --------------------------------------------------------------------------------*/

export const mostrarProductos = () => {
  const entryNode = document.getElementById("estante");
  Productos.forEach((item) => {
    const card = productoItem(item);
    entryNode.appendChild(card);
  });
}


/* --------------------------------------------------------------------------------*/
/*  Area drop donde se mostrarásn los productos arrastrados                        */
/* --------------------------------------------------------------------------------*/

export const dropAreaCesta = () => {
  const dropZone = document.getElementById("cesta");
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  // gestionamos lo que ocurre cuando hacemos drop de un item
  dropZone.addEventListener("drop", (event) => {
    const id = parseInt(event.dataTransfer.getData("id")); // Obtener el id del producto.
    carrito.push(id);
    const productoCesta = productoCestaItem (id); // Crear lo nodos de ese producto en el área de la cesta.
    dropZone.appendChild(productoCesta);
    productoCesta.dataset.position = carrito.length - 1; // Indicar la posición del elemento en el array carrito.
    updateTotal();
  });
}


/* --------------------------------------------------------------------------------*/
/* Calcula el total de los precios añadidos en el carrito                        */
/* --------------------------------------------------------------------------------*/

export const updateTotal = () => {
  const total = document.getElementById("total-compra");
  total.textContent = calculateTotal();
}


/* --------------------------------------------------------------------------------*/
/* calcula el total en el carro                                                    */
/* --------------------------------------------------------------------------------*/

const calculateTotal = () => {
  const getItemPrice = (id) => Productos.find((item) => item.id === id).price;
  return carrito.reduce((total, id) => total + getItemPrice(id), 0);
}

