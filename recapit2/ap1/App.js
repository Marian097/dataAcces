import { Client } from "./Client.js";

const form = document.getElementById("form");
let clienti = []

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("nameClient").value;
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let cantitate = document.getElementById("cantitate").value;
    let output = document.getElementById("output");
    const list = document.getElementById("list");

    if (!name || !product || !price || !cantitate)
    {
        output.textContent = "Va rog completati toate spatiile";
        return
    }

    const nume = name.trim().toLowerCase();

    let clientGasit = clienti.find(c => c.nume.toLowerCase() === nume)

    if (clientGasit)
    {
       clientGasit.adaugaProdus(product, price, cantitate);
    }

    else
    {
        const nouClient = new Client(name);
        nouClient.adaugaProdus(product, price, cantitate);
        clienti.push(nouClient)
        nouClient.afiseazaDom(list)
    }


    function afiseazaClient()
    {
        list.innerHTML ="";
        clienti.forEach(client => {
            client.afiseazaDom(list)
        })
    }

    afiseazaClient()
})

