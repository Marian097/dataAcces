import { Card } from "./Card.js";

class Client{
    constructor(name, numarCard)
    {
        this.name = name
        this.card = new Card(numarCard);
    }

}

export {Client};