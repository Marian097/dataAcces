const comenzi2 = [
  {
    client: "Ana",
    produse: [
      { nume: "Laptop", pret: 3000, cantitate: 1 },
      { nume: "Mouse", pret: 100, cantitate: 2 },
    ],
  },
  {
    client: "Ion",
    produse: [
      { nume: "Telefon", pret: 2000, cantitate: 1 },
      { nume: "Husă", pret: 50, cantitate: 3 },
    ],
  },
  {
    client: "Maria",
    produse: [
      { nume: "Casti", pret: 150, cantitate: 1 },
      { nume: "Mousepad", pret: 70, cantitate: 1 },
    ],
  },
  {
    client: "Radu",
    produse: [
      { nume: "Monitor", pret: 1000, cantitate: 2 },
      { nume: "Boxe", pret: 500, cantitate: 1 },
    ],
  },
  {
    client: "Mihai",
    produse: [
      { nume: "PC", pret: 2000, cantitate: 1 },
      { nume: "Camera web", pret: 100, cantitate: 1 },
    ],
  },

  {
    client: "Aura",
    produse: [
      { nume: "PS5", pret: 3000, cantitate: 1 },
      { nume: "Joystick", pret: 250, cantitate: 2 },
    ],
  },
];

let result = comenzi2.map((element) => {
  let total = element.produse.reduce(
    (acc, val) => acc + val.pret * val.cantitate,
    0
  );
  return {
    nume: element.client,
    cartValue: total,
  };
});

let premiumClients = result.filter((info) => info.cartValue > 2000);

let sortClient = premiumClients.sort((a, b) => {
  return b.cartValue - a.cartValue;
});

let top3Clients = sortClient.slice(0, 3);

let list = document.getElementById("listaPremium");

top3Clients.forEach((client) => {
  let li = document.createElement("li");
  li.textContent = `✅ ${client.nume} - ${client.cartValue}`;
  list.append(li);
});

document.addEventListener("DOMContentLoaded", function () {
  if (top3Clients.length === 0) {
    alert("Nici un client premium");
  } else {
    console.log("Felicitari.");
  }
});


const form = document.getElementById("formComanda");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputClient = document.getElementById("client").value.toLowerCase();
  let inputProduct = document.getElementById("produs").value.toLowerCase();
  let inputPrice = parseFloat(document.getElementById("pret").value);
  let inputCantitate = +eval(document.getElementById("cantitate").value);
  
  if (!inputClient || !inputProduct || !inputPrice || !inputCantitate)
  {
    alert("Completeaza toate campurile corect.")
    return
  }

  let clientTrue = comenzi2.find(c => c.client.toLowerCase() === inputClient.toLowerCase());
  
  if (clientTrue)
  {
    clientTrue.produse.push({nume: inputProduct, pret: inputPrice, cantitate: inputCantitate})

  }
  else
  {
    comenzi2.push({
        client: inputClient,
        produse: [{nume: inputProduct, pret: inputPrice, cantitate: inputCantitate}]
    });
  }
  
  form.reset();
  afiseazaLista3()
});


function afiseazaLista3()
{
    list.innerHTML ="";
    let rezultat = comenzi2.map(element => {
        let sum = element.produse.reduce((acc, val) => acc + val.pret * val.cantitate, 0);
        return {client: element.client, total: sum};
    });

    const top = rezultat
    .filter(info => info.total > 2000)
    .sort((a,b) => {return b.total - a.total})
    .slice(0 , 3)


    if (top.length === 0)
    {
        list.innerHTML = `<li>Niciun client premiu</li>`
        return;
    }

    top.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `✅${c.client} – ${c.total} lei`
        list.appendChild(li)
    })
}




