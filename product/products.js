// define data in JSON array
var products = [
  {
    name: "iPhone 13 mini",
    quantity: 2,
    ppu: 25900,
  },
  {
    name: "iPhone 13",
    quantity: 1,
    ppu: 29900,
  },
  {
    name: "iPhone 13 Pro",
    quantity: 4,
    ppu: 38900,
  },
  {
    name: "iPhone 13 Pro Max",
    quantity: 5,
    ppu: 42900,
  },
];

function loadData() {
  let productList = document.getElementById("productList");
  let gross = 0;

  document.getElementById("myName").innerHTML = "Hao Ye";
  for (let p in products) {
    let row = document.createElement("tr");
    let productName = document.createElement("td");
    productName.innerHTML = products[p].name;

    let quantity = document.createElement("td");
    quantity.innerHTML = products[p].quantity;
    quantity.classList.add("text_center");

    let ppu = document.createElement("td");
    ppu.innerHTML = products[p].ppu;
    ppu.classList.add("text_right");

    let total = document.createElement("td");
    total.innerHTML = products[p].ppu * products[p].quantity;
    total.classList.add("text_right");
    gross += products[p].ppu * products[p].quantity;

    row.appendChild(productName);
    row.appendChild(quantity);
    row.appendChild(ppu);
    row.appendChild(total);
    productList.appendChild(row);
  }

  let grossElem = document.getElementById("gross");
  grossElem.innerHTML = gross;

  let vat = gross * 0.07;
  let net = gross + vat;
  document.getElementById("vat").innerHTML = vat.toFixed(2);
  document.getElementById("net").innerHTML = net.toFixed(2);
}
