const PERSONAS = [
  {
    id: 61363,
    nombre: "Juan",
    edad: 30,
    estudios: "Medicina",
    intereses: ["Salud", "Deportes", "Tecnología"],
  },
  {
    id: 36461,
    nombre: "María",
    edad: 25,
    estudios: "Diseño Gráfico",
    intereses: ["Arte", "Creatividad", "Tecnología"],
  },
  {
    id: 56136,
    nombre: "Carlos",
    edad: 58,
    estudios: "Ingeniería de Software",
    intereses: ["Programación", "Videojuegos", "Tecnología"],
  },
  {
    id: 26613,
    nombre: "Laura",
    edad: 31,
    estudios: "Derecho",
    intereses: ["Justicia", "Derechos Humanos", "Deportes"],
  },
  {
    id: 76136,
    nombre: "Ana",
    edad: 28,
    estudios: "Psicología",
    intereses: ["Salud", "Deportes", "Cocina"],
  },
  {
    id: 91364,
    nombre: "Sofía",
    edad: 40,
    estudios: "Ciencias de la Computación",
    intereses: ["Programación", "Música", "Cocina"],
  },
  {
    id: 63669,
    nombre: "Pedro",
    edad: 22,
    estudios: "Diseño Gráfico",
    intereses: ["Arte", "Creatividad", "Tecnología"],
  },
  {
    id: 36416,
    nombre: "Lucía",
    edad: 35,
    estudios: "Medicina",
    intereses: ["Salud", "Deportes", "Viajes"],
  },
  {
    id: 56173,
    nombre: "Miguel",
    edad: 45,
    estudios: "Ingeniería de Software",
    intereses: ["Programación", "Videojuegos", "Tecnología"],
  },
  {
    id: 26634,
    nombre: "Elena",
    edad: 29,
    estudios: "Derecho",
    intereses: ["Justicia", "Derechos Humanos", "Deportes"],
  },
  {
    id: 76145,
    nombre: "Javier",
    edad: 33,
    estudios: "Psicología",
    intereses: ["Salud", "Deportes", "Viajes"],
  },
  {
    id: 21325,
    nombre: "Martina",
    edad: 38,
    estudios: "Ciencias de la Computación",
    intereses: ["Programación", "Música", "Cocina"],
  },
  {
    id: 63628,
    nombre: "Diego",
    edad: 27,
    estudios: "Diseño Gráfico",
    intereses: ["Arte", "Creatividad", "Tecnología"],
  },
  {
    id: 36457,
    nombre: "Isabel",
    edad: 32,
    estudios: "Medicina",
    intereses: ["Salud", "Deportes", "Viajes"],
  },
  {
    id: 56182,
    nombre: "Andrés",
    edad: 50,
    estudios: "Ingeniería de Software",
    intereses: ["Programación", "Videojuegos", "Tecnología"],
  },
  {
    id: 26691,
    nombre: "Carmen",
    edad: 26,
    estudios: "Derecho",
    intereses: ["Justicia", "Derechos Humanos", "Deportes"],
  },
  {
    id: 76112,
    nombre: "Raúl",
    edad: 34,
    estudios: "Psicología",
    intereses: ["Salud", "Deportes", "Viajes"],
  },
  {
    id: 71347,
    nombre: "Susana",
    edad: 44,
    estudios: "Ciencias de la Computación",
    intereses: ["Programación", "Música", "Cocina"],
  },
];

function buscarPersonaPorId(personas, id) {
  let personaEncontrada = undefined;
  personas.forEach((persona) => {
    if (persona.id == id) {
      personaEncontrada = persona;
    }
  });
  return personaEncontrada;
}

function filtrarPersonasPorEstudios(personas, estudios) {
  let personasFiltradas = [];
  personas.forEach((persona) => {
    if (persona.estudios == estudios) personasFiltradas.push(persona);
  });
  return personasFiltradas;
}

function filtrarPersonasPorEdad(personas, minEdad, maxEdad) {
  let personasFiltradas = [];
  personas.forEach((persona) => {
    if (persona.edad >= minEdad && persona.edad <= maxEdad) {
      personasFiltradas.push(persona);
    }
  });
  return personasFiltradas;
}

function filtrarPersonaPorInteres(personas, interes) {
  let personasFiltradas = [];
  personas.forEach((persona) => {
    for (let i = 0; i < persona.intereses.length; i++) {
      if (persona.intereses[i] == interes) {
        personasFiltradas.push(persona);
      }
    }
  });
  return personasFiltradas;
}

function nombres(personas) {
  let nombres = personas.map((persona) => persona.nombre);
  return nombres;
}

function mediaEdad(personas) {
  const total = personas.reduce((suma, persona) => {
    return suma + persona.edad;
  }, 0);
  const edadMedia = total / personas.length;
  return edadMedia;
}

function intereses(personas) {
  let interesesUnicos = [];
  personas.forEach((persona) => {
    persona.intereses.forEach((interes) => {
      if (!interesesUnicos.includes(interes)) {
        interesesUnicos.push(interes);
      }
    });
  });
  return interesesUnicos;
}

function insertarPersona(personas, id, nombre, edad, estudios, intereses) {
  const persona = {
    id: id,
    nombre: nombre,
    edad: edad,
    estudios: estudios,
    intereses: intereses,
  };
  personas.push(persona);
}

function eliminarPersona(personas, id) {
    for (let i = personas.length - 1; i >= 0; i--) {
        if (personas[i].id == id) {
            personas.splice(i, 1);
        }
    }
    console.log(personas)
}

