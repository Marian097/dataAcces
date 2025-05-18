const comenzi = [
  { produs: "Laptop", pret: 3000, cantitate: 2 },
  { produs: "Mouse", pret: 150, cantitate: 4 },
  { produs: "Monitor", pret: 1200, cantitate: 1 }
];


const total = comenzi.reduce((suma, produs) => {
    return suma + produs.pret * produs.cantitate
}, 0)


console.log(total)