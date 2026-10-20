const container = document.querySelector("div#personas");
const nav = document.querySelector("nav");

function limpiarPanel() {
  container.innerHTML = "";
}

function mostrarNombres(personas) {
  limpiarPanel();
  const ul = document.createElement("ul");
  personas.forEach((persona) => {
    const li = document.createElement("li");
    li.textContent = persona.nombre;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

function botonesPersonas(personas) {
  personas.forEach((persona) => {
    const button = document.createElement("button");
    button.textContent = persona.nombre;
    button.setAttribute("onclick", `mostrarPersonaId(${persona.id})`);
    nav.appendChild(button);
  });
}

function mostrarPersona(persona) {
  const newDiv = document.createElement("div");
  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");
  const newUl = document.createElement("ul");
  const newButton = document.createElement("button");

  newDiv.className = "persona";
  newButton.textContent = "Eliminar persona";
  newButton.onclick = () => {
    eliminarPersona(PERSONAS, persona.id);
    newDiv.remove();
  };
  newH2.textContent = `${persona.nombre} (${persona.edad})`;
  newP.textContent = persona.estudios;
  persona.intereses.forEach((interes) => {
    const newLi = document.createElement("li");
    newLi.textContent = interes;
    newUl.appendChild(newLi);
  });
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newUl);
  newDiv.appendChild(newButton);
  container.appendChild(newDiv);
}

function mostrarPersonaId(id) {
  const persona = PERSONAS.find((persona) => persona.id === id);
  const newDiv = document.createElement("div");
  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");
  const newUl = document.createElement("ul");
  newDiv.className = "persona";
  newH2.textContent = `${persona.nombre} (${persona.edad})`;
  newP.textContent = persona.estudios;
  persona.intereses.forEach((interes) => {
    const newLi = document.createElement("li");
    newLi.textContent = interes;
    newUl.appendChild(newLi);
  });
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newUl);
  container.appendChild(newDiv);
}

function mostrarListadoPersonas(personas) {
  limpiarPanel();
  personas.forEach((persona) => {
    mostrarPersona(persona);
  });
}

function crearPersona() {
  const inputsFormulario = document.querySelectorAll(
    "#formularioPersona input",
  );

  const personaId = Math.floor(Math.random() * 99999) + 1;
  const personaNombre = inputsFormulario[0].value;
  const personaEdad = Number(inputsFormulario[1].value);
  const personaEstudios = inputsFormulario[2].value;
  const personasIntereses = inputsFormulario[3].value
    .split(",")
    .map((interes) => interes.trim());

  const persona = {
    id: personaId,
    nombre: personaNombre,
    edad: personaEdad,
    estudios: personaEstudios,
    intereses: personasIntereses,
  };

  PERSONAS.push(persona);

  mostrarListadoPersonas(PERSONAS);
}

function filtrarEdad(minima, maxima) {
  const minimaInput = document.querySelector("input[name='minima']");
  const maxInput = document.querySelector("input[name='maxima']");

  minima = Number(minimaInput.value);
  maxima = Number(maxInput.value);

  const arrayFiltrado = [];

  PERSONAS.forEach((persona) => {
    if (persona.edad >= minima && persona.edad <= maxima) {
      arrayFiltrado.push(persona);
    }
  });

  mostrarListadoPersonas(arrayFiltrado);
}
botonesPersonas(PERSONAS);
