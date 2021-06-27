

import { Productos } from "./db_productos.js";
import { carrito } from "../index.js";
import { updateTotal } from "./utilities.js";


/* --------------------------------------------------------------------------------*/
/*  Mostrar los productos añadidos en el carrito                                   */
/* --------------------------------------------------------------------------------*/

export const productoCestaItem = (id) => {
  const item = Productos.find((product) => product.id === id);

  const productoCesta = document.createElement("div");

  // generación de nodos
  const productoCestaName = document.createElement("div");
  const productoCestaPrice = document.createElement("div");
  const productoCestaIcon = document.createElement("img");
  const productoCestaDelete = document.createElement("img");

  // adición de clases CSS
  productoCesta.classList.add("cart-line");
  productoCestaName.classList.add("cart-line-name");
  productoCestaPrice.classList.add("cart-line-price");
  productoCestaIcon.classList.add("cart-line-icon");
  productoCestaDelete.classList.add("cart-line-delete");

  // se añade contenido
  productoCestaName.textContent = item.name;
  productoCestaPrice.textContent = item.price;
  productoCestaIcon.setAttribute("src", item.img);
  productoCestaDelete.setAttribute("src", "images/delete.svg");

  // configuramos el elemento HTML final
  productoCesta.appendChild(productoCestaIcon);
  productoCesta.appendChild(productoCestaName);
  productoCesta.appendChild(productoCestaPrice);
  productoCesta.appendChild(productoCestaDelete);

  // se añade event listener para gestionar el borrado de un elemento del
  productoCestaDelete.addEventListener("click", (event) => {
    const positionInCart = event.target.parentElement.getAttribute("data-position");
    carrito.splice(positionInCart, 1);
    updateTotal();
    console.log(carrito);
    event.target.parentElement.remove();
  });

  return productoCesta;
}
