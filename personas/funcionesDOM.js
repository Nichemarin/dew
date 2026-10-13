const container = document.querySelector("div#personas");
const nav = document.querySelector("nav");

function limpiarPanel(){
    container.innerHTML = "";
}

function mostrarNombres(personas) {
    limpiarPanel();
    const ul = document.createElement("ul");
    personas.forEach(persona => {
        const li = document.createElement("li");
        li.textContent = persona.nombre;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

function botonesPersonas(personas){
    personas.forEach(persona => {
        const button = document.createElement("button");
        button.textContent = persona.nombre;
        button.setAttribute("onclick", `mostrarPersonaId(${persona.id})`);
        nav.appendChild(button);
    });
}

function mostrarPersona(persona){
    const newDiv = document.createElement("div");
    newDiv.className = "persona";
    const newH2 = document.createElement("h2");
    newH2.textContent = persona.nombre;
       
}
botonesPersonas(PERSONAS);