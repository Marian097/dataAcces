class Persoana{
    titular;
    cash;
    card;
    constructor(titular, cash, card)
    {
        this.titular = titular;
        this.cash = cash;
        this.card = card;
        
    }

    depoziteaza_sumaCard(suma){
        if (suma < this.cash)
        {
            this.cash -= suma;
            this.card +=suma;
        }
        else{
            console.log("Fonduri insuficiente")
        }
       
    }

    retrage_sumaCard(suma){
        if (suma < this.card)
        {
            this.card -= suma;
            this.cash += suma
        }
        else{
            console.log("Fonduri insuficiente")
        }
       

    }

    afiseazaSold(){
        return `Bani pe card: ${this.card}
                Bani cash: ${this.cash} `

    }
}


let persoana = new Persoana("Marian", 500, 200);

persoana.depoziteaza_sumaCard(50)
console.log(persoana.afiseazaSold())

persoana.retrage_sumaCard(100)
console.log(persoana.afiseazaSold())