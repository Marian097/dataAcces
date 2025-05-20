class Card {
    constructor(numar)
    {
        this.numar = numar;
        this.sold = 0;
    }

    adaugaBani(suma){
        this.sold += suma
    };

    retrageBani(suma){
        if (suma <= this.sold)
        {
            this.sold -= suma;
        }
        else
        {
            alert("Fonduri insuficiente")
        }
    }

    afiseazaSold(){
        return this.sold;
    }
}


export {Card};