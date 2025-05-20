import { Client } from "./Client.js";
import { Banca } from "./Banca.js";

const form = document.getElementById("form");
let list = document.getElementById("list");
let select = document.getElementById("operatiune");
const btAfisare = document.getElementById("bt");
const bank = new Banca("Wester Bank")

let clienti = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputName = document.getElementById("nume").value.toLowerCase();
  let inputNumberCard = document.getElementById("numarCard").value;
  let inputSuma = document.getElementById("suma").value;
  let option = select.value;
  if (!inputName || !inputNumberCard || !inputSuma) {
    alert("Va rog completati toate spatiile.");
    return;
  }

  let name = inputName;
  let clientGasit = clienti.find(c => c.name === name);

  if (clientGasit) {
    if (option === "adauga")
    {
        clientGasit.card.adaugaBani(inputSuma);
    }else if (option === "retrage");
    {
        clientGasit.card.retrageBani(inputSuma);
    }
  } else {
    const client = new Client(name, inputNumberCard);

      if (option === "adauga") {
        client.card.adaugaBani(inputSuma);
      } else if (option === "retrage") {
        client.card.retrageBani(inputSuma);
      }
      clienti.push(client);
  }

  function afiseazaClienti(list, clienti) {
    list.innerHTML = "";
    clienti.forEach(client => {
        let li = document.createElement("li");
        li.textContent = `${client.name} - sold: ${client.card.afiseazaSold()} lei`;
        list.appendChild(li);
    });
}

afiseazaClienti(list, clienti);
});

