
/* --------------------------------------------------------------------------------*/
/*  Mostrar los productos a partir de la base de datos (Productos.json).            */
/* ---------------------------------------------------------------------------------*/

export const productoItem = (item) => {
 //Creadión de lo nodos que forman la estructura de cada card de producto
  const newCard = document.createElement("div");
  const newCardBody = document.createElement("div");
  const newCardImage = document.createElement("div");
  const newCardTitle = document.createElement("div");
  const newCardPrice = document.createElement("div");
  const newCardText = document.createElement("span");

 // Asignar las clases a cada nodo creado
  newCard.classList.add("card");
  newCard.classList.add("producto");
  newCardBody.classList.add("card-body");
  newCardImage.classList.add("card-img-top");
  newCardTitle.classList.add("card-title");
  newCardPrice.classList.add("card-price");
  newCardText.classList.add("card-text");

// Añadir los datos y atributos
  newCardImage.style.backgroundImage = `url(${item.img})`;
  newCardTitle.textContent = item.name;
  newCardPrice.textContent = item.price;
  newCardText.textContent = item.measurement;

// Insertar los elemwntos al DOM
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitle);
  newCard.insertAdjacentElement("afterbegin", newCardImage);
  newCardBody.appendChild(newCardPrice);
  newCardPrice.appendChild(newCardText);

// Añadir el atributo draggable a cada elemento (card) y el data attribute con el id.
  newCard.setAttribute("draggable", true);
  newCard.dataset.id = item.id;

// Añadir la escucha del evento al arrastrar el producto
  newCard.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData(); //limpiar lo que pudiera haber previamente en el objeto dataTransfer
    event.dataTransfer.setData("id", event.target.getAttribute("data-id"));
  });

  return newCard;
}