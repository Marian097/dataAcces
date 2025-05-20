class Card {
    constructor(number)
    {
        this.number = number;
        this.sold = 0;
    }

    adaugaBani(suma)
    {
        this.sold += suma;
    }

    retrageBane(suma)
    {
        if (this.sold >=suma)
        {
            this.sold -= suma;
        }
        else{
            console.log("Fonduri insuficiente")
        }
    }

    afiseazaSold()
    {
        return this.sold;
    }
}

export {Card};