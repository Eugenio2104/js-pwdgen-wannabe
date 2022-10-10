const nomeUtente = prompt ('quale è il tuo nome?');
const cognomeUtente = prompt ('quale è il tuo cognome?');
const colorePreferito = prompt ('quale è il tuo colore preferito?');
const numeroCasuale = (22);
let output;



output = `
${nomeUtente}${cognomeUtente}${colorePreferito}${numeroCasuale}
`;
document.getElementById('saluto').innerHTML += output;