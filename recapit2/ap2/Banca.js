class Banca{
    constructor(nameBank)
    {
        this.nameBank = nameBank;
        this.clients = [];
    }

    adaugaClient(client){
        this.clients.push({client})
    }

    gasesteClient(name){
        return this.clients.find(c => c.name === name);
    }

    afiseazaClientiDom(element)
    {
        console.log(`---${this.nameBank}---`)
        element.forEach(client => {
            console.log(`Nume: ${client.name} - Sold: ${client.afiseazaSold()}`)
        })
    }

    filtreazaClienti(minimSold)
    {
        return this.clients.filter(c => c.afiseazaSold()> minimSold) 
    }
}

export {Banca};