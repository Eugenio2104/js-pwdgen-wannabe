const nomeUtente = prompt ('Quale è il tuo nome?');
const cognomeUtente = prompt ('Quale è il tuo cognome?');
const colorePreferito = prompt ('Quale è il tuo colore preferito?');
const numeroCasuale = (22);
let output;



output = `
${nomeUtente}${cognomeUtente}${colorePreferito}${numeroCasuale}
`;
document.getElementById('saluto').innerHTML += output;