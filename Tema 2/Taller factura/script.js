const formProducto = document.getElementById("form-producto");
const table = document.getElementById("productos");
const allTaxes = document.querySelectorAll("#taxes input");

allTaxes.forEach((taxBtn) => {
  taxBtn.addEventListener("change", recalculateTotal);
});

formProducto.addEventListener("submit", readValues);

function readValues(e) {
  e.preventDefault(); 
  const description = document.getElementById("descripcion").value;
  const quantity = document.getElementById("cantidad").value;
  const price = document.getElementById("precio").value;

  const total = totalPrice(quantity, price);
  createNewRow(description, quantity, price, total);
  cleanInput();
  recalculateTotal();
}

function totalPrice(quantity, price) {
  return quantity * price;
}

function createNewRow(description, quantity, price, total) {
  const newTr = document.createElement("tr");
  const content = [description, quantity, price, total];
  const eliminateBtn = document.createElement("button");

  content.forEach((contenido) => {
    const newTd = document.createElement("td");
    newTd.textContent = contenido;
    newTr.appendChild(newTd);
  });

  const eliminatetd = document.createElement("td");
  eliminateBtn.textContent = "X";

  eliminateBtn.addEventListener("click", () => {
    newTr.remove();
    recalculateTotal();
  });

  eliminatetd.appendChild(eliminateBtn);
  newTr.appendChild(eliminatetd);

  table.appendChild(newTr);
}

function cleanInput() {
  formProducto.reset();
}

function recalculateTotal() {
  let subTotal = 0;
  let taxRate = taxes();
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((totalRow) => {
    const totalColumn = totalRow.querySelectorAll("td");
    let x = totalColumn[3].textContent;
    x = parseFloat(x);
    subTotal += x;
  });
  const taxesValue = taxRate * subTotal;
  const total = subTotal + taxesValue;
  showStats(subTotal, taxRate, taxesValue, total);
  return total;
}

function taxes() {
  const fivePercentTax = document.getElementById("5percent");
  const TenPercentTax = document.getElementById("10percent");
  const FifteenteenPercentTax = document.getElementById("15percent");
  const TwentyPercentTax = document.getElementById("20percent");

  let percent = 0;

  if (fivePercentTax.checked) {
    percent = 0.05;
  } else if (TenPercentTax.checked) {
    percent = 0.1;
  } else if (FifteenteenPercentTax.checked) {
    percent = 0.15;
  } else if (TwentyPercentTax.checked) {
    percent = 0.2;
  }
  return percent;
}

function showStats(subTotal, taxes, taxesValue, total) {
  const subTotalSpan = document.getElementById("subtotal");
  const taxesSpan = document.getElementById("tasa");
  const TaxesValueSpan = document.getElementById("impuestos");
  const totalSpan = document.getElementById("total");

  subTotalSpan.textContent = subTotal.toFixed(2) + " €";
  taxesSpan.textContent = (taxes * 100) + "%";
  TaxesValueSpan.textContent = taxesValue.toFixed(2) + " €";
  totalSpan.textContent = total.toFixed(2) + " €";
}
