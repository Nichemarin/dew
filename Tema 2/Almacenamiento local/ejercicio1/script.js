const form = document.querySelector("form");
form.addEventListener("submit", saveData);


function saveData(e) {
  e.preventDefault();

  const dataArray = [
    {
      Nombre: document.querySelector("input#nombre").value,
      Edad: document.querySelector("input#edad").value,
    },
  ];

  try {
    localStorage.setItem("datos", JSON.stringify(dataArray));

    if (localStorage.getItem("datos")) {
      goOtherPage();
    }
  } catch (error) {
    if (error.name === "QuotaExceededError") {
      console.error("Error: Almacenamiento lleno");
    } else {
      console.error(error);
    }
  }
}

function goOtherPage() {
  window.location = "pag2.html";
}