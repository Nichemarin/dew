/* Nivel 1: Introducción a Funciones y Tipos de Datos
Ejercicio 1: Saludo personalizado
Ejercicio 2: Suma de dos números
*/
const saludar = (nombre) => console.log("Hola " + nombre + "!");

function sumar(a, b) {
  return a + b;
}
/*
Nivel 2: Estructuras de Control (Condicionales)
Ejercicio 3: Mayor de dos números
Ejercicio 4: Determinar si un número es par o impar
*/
const mayor = (a, b) => {
  if (a > b) {
    console.log(a + " es mayor que " + b);
  } else {
    console.log(b + " es mayor que " + a);
  }
};

const isPar = (x) => {
  if (x % 2 == 0) {
    console.log(x + " es par");
  } else {
    console.log(x + " no es par");
  }
};
/*
Nivel 3: Estructuras de Control (Bucles) y Arrays
Ejercicio 5: Suma de elementos de un array
Ejercicio 6: Encontrar el número mayor en un array
*/
const sumarArray = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  console.log(suma);
};

const encontrarMayor = (array) => Math.max(...array);
/*
Nivel 4: Objetos Literales
Ejercicio 7: Información de un libro
Ejercicio 8: Inventario de productos
*/
const infoLibro = (libro) =>
  console.log(
    "Libro: " +
      libro.nombre +
      " Autor: " +
      libro.autor +
      " Páginas: " +
      libro.pages,
  );

function inventarioProducto(arrayObjetos) {
  for (let i = 0; i < arrayObjetos.length; i++) {
    console.log(
      "Producto: " +
        arrayObjetos[i].nombre +
        " Precio:" +
        arrayObjetos[i].precio +
        " Stock:" +
        arrayObjetos[i].stock,
    );
  }
}
/*
Nivel 5: Integración de Múltiples Conceptos
Ejercicio 9: Filtrar productos por precio
Ejercicio 10: Calcular el total del inventario
*/
function filtrarPrecio(arrayObjetos, precioMax) {
  let  nuevoArray = [];
  for (let i = 0; i < arrayObjetos.length; i++) {
    if (arrayObjetos[i].precio <= precioMax) {
            nuevoArray.push(arrayObjetos[i]);
        }
  }
  return nuevoArray;
}

function calcularPrecioTotal(arrayObjetos){
  let precioTotal = 0;
  for (const objeto of arrayObjetos){
    precioTotal += arrayObjetos.precio * arrayObjetos.stock;
  }
  return precioTotal;
}

/*Nivel 4 (Continuación): Métodos de Array
Ejercicio 11: Filtrar números pares
Ejercicio 12: Duplicar los números de un array
Ejercicio 13: Imprimir cada elemento de un array
Ejercicio 14: Verificar si todos los números son positivos
Ejercicio 15: Verificar si al menos un número es par
Ejercicio 16: Calcular la suma de los elementos de un array (usando reduce)
*/
function filtrarNumPares(array){
    array.filter(numero => numero % 2 == 0);
}

function duplicate(array){
    const arrayduplicado = array.map(numero => numero * 2);
    return arrayduplicado;
}

function imprimirArray(array){
    array.forEach(element =>console.log(element));
}


/*
Nivel 5 (Continuación): Combinación Avanzada
Ejercicio 17: Filtrar y transformar productos
Ejercicio 18: Calcular el precio promedio de los productos en stock
*/
