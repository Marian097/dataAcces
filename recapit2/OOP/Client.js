import { Card } from "./Card.js";

class Client {
    constructor(name, cardNumber)
    {
        this.name = name;
        this.card = new Card(cardNumber);
    }
}

export {Client};
