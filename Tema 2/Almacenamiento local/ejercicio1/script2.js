
const labelName = document.getElementById("nombreMostrar");
const labelAge = document.getElementById("edadMostrar");
const btnDelete = document.getElementById("deleteBtn");

data = localStorage.getItem("datos");
restoredData = JSON.parse(data);

labelName.textContent = `${restoredData[0].Nombre}`;
labelAge.textContent = `${restoredData[0].Edad}`

btnDelete.addEventListener("click", deleteData);

function deleteData(){
    localStorage.clear();
}