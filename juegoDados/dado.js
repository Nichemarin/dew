let dinero = 10;
let dadoAnterior = tirarDado();

const dado = document.getElementById("dado");
const dineroTexto = document.getElementById("dinero");
const apuestaInput = document.getElementById("apuesta");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function mostrarDado(valor) {
  dado.src = "Imagenes/dice" + valor + ".gif";
}

mostrarDado(dadoAnterior);

boton.addEventListener("click", function () {
  const apuesta = Number(apuestaInput.value);

  if (isNaN(apuesta) || apuesta <= 0) {
    mensaje.textContent = "La apuesta debe ser mayor que 0.";
    return;
  }

  if (apuesta > dinero) {
    mensaje.textContent = "No puedes apostar más dinero del disponible.";
    return;
  }
  const nuevoDado = tirarDado();
  mostrarDado(nuevoDado);
  if (nuevoDado > dadoAnterior) {
    dinero += apuesta;
    mensaje.textContent = "¡Has ganado!";
  } else {
    dinero -= apuesta;
    mensaje.textContent = "Has perdido.";
  }
  dineroTexto.textContent = dinero;
  dadoAnterior = nuevoDado;
  if (dinero === 0) {
    alert("Te has quedado sin dinero. Has perdido. Se reinicia el juego.");

    dinero = 10;
    dineroTexto.textContent = dinero;
    apuestaInput.value = 1;

    dadoAnterior = tirarDado();
    mostrarDado(dadoAnterior);
    mensaje.textContent = "Has perdido. Nuevo juego iniciado.";
  }
});
