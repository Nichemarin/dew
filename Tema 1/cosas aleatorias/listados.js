const listas = document.querySelectorAll("ul");
const boton = document.querySelector("button");
const lista1 = listas[0];
const lista2 = listas[1];
const elementos = lista1.querySelectorAll("li");

elementos.forEach((elemento) => {
  elemento.onclick = () => {
    elemento.classList.toggle("selected");
  };
});

boton.onclick = () => {
  const seleccionados = lista1.querySelectorAll("li.selected");
  const seleccionados2 = lista2.querySelectorAll("li.selected")

  seleccionados.forEach((elemento) => {
    elemento.classList.remove("selected");
    lista2.appendChild(elemento);
  });

  seleccionados2.forEach((elemento) => {
    elemento.classList.remove("selected");
    lista1.appendChild(elemento);
  });
};


