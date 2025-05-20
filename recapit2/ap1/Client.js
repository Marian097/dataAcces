class Client {
    constructor(nume)
    {
        this.nume = nume;
        this.id = crypto.randomUUID()
        this.comanda = []
    }

    adaugaProdus(nume, pret, cantitate)
    {
        this.comanda.push({nume, pret, cantitate})
    }

    totalComanda()
    {
        return this.comanda.reduce((acc, v) => acc + v.pret * v.cantitate, 0)
    }

    afiseazaDom(element)
    {
        let li = document.createElement("li");
        li.textContent = `✅ ${this.nume} - ${this.totalComanda()} lei`
        element.appendChild(li)
    }
}

export {Client}