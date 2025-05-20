import { Client } from "./Client.js";
import { Banca } from "./Banca.js";

const banca = new Banca("Banca Recapitulare");
const client1 = new Client("Ana", "546785123")

client1.card.adaugaBani(1000);

const client2 = new Client("Bogdan", "67989243");
client2.card.adaugaBani(20000);
client2.card.retrageBane(1000);

banca.adaugaClient(client2);
banca.adaugaClient(client1);

const gasit = banca.gasesteClient("ana");

gasit.card.adaugaBani(100);

banca.afiseazaTot()