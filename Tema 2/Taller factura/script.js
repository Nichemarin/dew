const inputDescripcion = document.getElementById("descripcion");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");
const botonInsertar = document.getElementById("insertar");
const tbody = document.getElementById("productos");
const radiosImpuesto = document.querySelectorAll("input[name='impuesto']");

const spanSubtotal = document.getElementById("subtotal");
const spanTasa = document.getElementById("tasa");
const spanImpuestos = document.getElementById("impuestos");
const spanTotal = document.getElementById("total");


let tasaActiva = 0;
let lineas = [];
let siguienteId = 1;

function formatearMoneda(valor) {
  const centimos = Math.floor(valor * 100 + 0.5);
  const euros = Math.floor(centimos / 100);
  const resto = centimos % 100;
  if (resto < 10) {
    return euros + ".0" + resto + "€";
  }
  return euros + "." + resto + "€";
}

function crearCelda(texto) {
  const td = document.createElement("td");
  td.textContent = texto;
  return td;
}

function insertarProducto() {
  const concepto = inputDescripcion.value.trim();
  const cantidad = Number(inputCantidad.value);
  const precio = Number(inputPrecio.value);

  if (
    concepto === "" ||
    inputPrecio.value === "" ||
    isNaN(cantidad) ||
    isNaN(precio) ||
    cantidad < 1 ||
    precio < 0
  ) {
    alert("Rellena todos los campos con valores válidos.");
    return;
  }

  const precioTotal = cantidad * precio;
  const id = siguienteId;
  siguienteId++;

  const fila = document.createElement("tr");
  fila.appendChild(crearCelda(concepto));
  fila.appendChild(crearCelda(cantidad));
  fila.appendChild(crearCelda(formatearMoneda(precio)));
  fila.appendChild(crearCelda(formatearMoneda(precioTotal)));

  const celdaEliminar = document.createElement("td");
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";
  botonEliminar.onclick = () => eliminarProducto(fila, id);
  celdaEliminar.appendChild(botonEliminar);
  fila.appendChild(celdaEliminar);

  tbody.appendChild(fila);
  lineas.push({ id: id, total: precioTotal });

  inputDescripcion.value = "";
  inputCantidad.value = "";
  inputPrecio.value = "";

  recalcularTotales();
}

function recalcularTotales() {
  const subtotal = lineas.reduce((suma, linea) => suma + linea.total, 0);
  const impuestos = (subtotal * tasaActiva) / 100;
  const total = subtotal + impuestos;

  spanSubtotal.textContent = formatearMoneda(subtotal);
  spanTasa.textContent = tasaActiva + "%";
  spanImpuestos.textContent = formatearMoneda(impuestos);
  spanTotal.textContent = formatearMoneda(total);
}

function cambiarTasa(event) {
  tasaActiva = Number(event.target.value);
  recalcularTotales();
}

function eliminarProducto(fila, id) {
  fila.remove();
  lineas = lineas.filter((linea) => linea.id !== id);
  recalcularTotales();
}

botonInsertar.addEventListener("click", insertarProducto);
radiosImpuesto.forEach((radio) => {
  radio.addEventListener("click", cambiarTasa);
});

recalcularTotales();