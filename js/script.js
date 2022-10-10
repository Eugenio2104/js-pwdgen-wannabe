const nomeUtente = prompt ('quale è il tuo nome?');
const cognomeUtente = prompt ('quale è il tuo cognome?');
const colorePreferito = prompt ('quale è il tuo colore preferito?');
let output;



output = `
${nomeUtente}${cognomeUtente}${colorePreferito}
`;
document.getElementById('saluto').innerHTML += output;