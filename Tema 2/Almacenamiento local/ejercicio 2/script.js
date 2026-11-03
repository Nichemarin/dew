const color = document.getElementById("color");
const range = document.getElementById("rng");
const btnSave = document.getElementById("save");
const loreIpsum = document.getElementById("text");

btnSave.addEventListener("click", saveData);

function saveData(e) {
  e.preventDefault();

  const dataArray = [
    {
      Color: document.querySelector("input#color").value,
      Rango: document.querySelector("input#rng").value,
    },
  ];

  try {
    localStorage.setItem("datos", JSON.stringify(dataArray));
  } catch (error) {
    if (error.name === "QuotaExceededError") {
      console.error("Error: Almacenamiento lleno");
    } else {
      console.error(error);
    }
  }
}

data = localStorage.getItem("datos");
settings = JSON.parse(data);

color.value = settings[0].Color;
range.value = settings[0].Rango;
loreIpsum.setAttribute("style", `color: ${settings[0].Color}; font-size: ${settings[0].Rango}px;`);