const cos = [
  { produs: "Laptop", pret: 3000, cantitate: 1 },
  { produs: "Mouse", pret: 150, cantitate: 2 },
  { produs: "Monitor", pret: 1200, cantitate: 1 }
];

// ✅ Cerință: Calculează numărul total de produse (adică suma cantităților).

let sumCantitate = cos.reduce((total, produs) => {
    return total += produs.cantitate;
}, 0)

console.log("Numarul total de produse, " + sumCantitate)


const utilizatori = [
  { nume: "Ana" },
  { nume: "Ion" },
  { nume: "Maria" }
];
 
// ✅ Cerință: Creează un singur string cu toți utilizatorii separați prin virgulă:

let oneString = utilizatori.reduce((string, people, index) => {
  return string + (index !== 0 ? "," : "") + people.nume;
}, "")

console.log(oneString)


const produse = [
  { nume: "Laptop", categorie: "Electronice" },
  { nume: "Tastatură", categorie: "Electronice" },
  { nume: "Minge", categorie: "Sport" },
  { nume: "Bicicletă", categorie: "Sport" }
];




const grupate = produse.reduce((acc, produse) => {
  const categorie = produse.categorie;
  const numeProdus = produse.nume;

  if (!acc[categorie]){
    acc[categorie] = [numeProdus];
  }
  else
  {
    acc[categorie].push(numeProdus)
  }

  return acc;
})


console.log(grupate)



const stocuri = [
  { produs: "Laptop", locatii: [5, 3, 2] },
  { produs: "Telefon", locatii: [10, 0, 4] },
  { produs: "Monitor", locatii: [1, 2] }
];



const rezulat = stocuri.map(prod => {
  const total = prod.locatii.reduce((acc, val) => acc+val, 0);
  return {produs: prod.produs, stocTotal: total};
})


const comenzi = [
  {
    client: "Ana",
    produse: [
      { nume: "Laptop", pret: 3000, cantitate: 1 },
      { nume: "Mouse", pret: 100, cantitate: 2 }
    ]
  },
  {
    client: "Ion",
    produse: [
      { nume: "Telefon", pret: 2000, cantitate: 1 },
      { nume: "Husă", pret: 50, cantitate: 3 }
    ]
  }
];





let rezultat2 = comenzi.map(element => {
  let sumTotal = element.produse.reduce((acc, val) => acc + val.pret * val.cantitate, 0)
  return {client: element.client, total: sumTotal }
})


console.log(rezultat2)



const comenzi2 = [
  {
    client: "Ana",
    produse: [
      { nume: "Laptop", pret: 3000, cantitate: 1 },
      { nume: "Mouse", pret: 100, cantitate: 2 }
    ]
  },
  {
    client: "Ion",
    produse: [
      { nume: "Telefon", pret: 2000, cantitate: 1 },
      { nume: "Husă", pret: 50, cantitate: 3 }
    ]
  },
  {
    client: "Maria",
    produse: [
      { nume: "Casti", pret: 150, cantitate: 1 },
      { nume: "Mousepad", pret: 70, cantitate: 1 }
    ]
  },
  {
    client: "Radu",
    produse: [
      { nume: "Monitor", pret: 1000, cantitate: 2 },
      { nume: "Boxe", pret: 500, cantitate: 1 }
    ]
  }
];



let rezultat3 = comenzi2.map(object => {
  let sum = object.produse.reduce((acc, val) => acc + val.pret * val.cantitate, 0);
  return {client: object.client, total : sum}
});


let filterClient = rezultat3.filter(clients => {
  return clients.total > 2000
});


let filterAsc = filterClient.sort((a, b) => {
  return b.total - a.total;
});


console.log(filterClient)

console.log(filterAsc)


let top2 = filterAsc.slice(0, 2)

top2.forEach(info => {
  console.log(`Felicitari, ${info.client}! Comanda in vaoare de ${info.total} a fost procesata  cu succes.`)
})


let people = filterAsc.find(info => info.client === "Ana");
console.log(`Salut ${people.client}`)











