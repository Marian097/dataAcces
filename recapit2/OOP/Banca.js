
class Banca{
    constructor(name)
    {
        this.name = name;
        this.clienti = []
    }

    adaugaClient(client)
    {
        this.clienti.push(client);
    }

    gasesteClient(name)
    {
        return this.clienti.find(c => c.name.toLowerCase() === name.toLowerCase());
    }

    afiseazaTot()
    {
        console.log(`---${this.name}---`)
        this.clienti.forEach(c => {
            console.log(`${c.name} - sold: ${c.card.afiseazaSold()} lei`)
        })
    }
}

export {Banca};