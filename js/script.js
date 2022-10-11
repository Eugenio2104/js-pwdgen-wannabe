const nomeCognome = prompt("Inserisci nome e cognome");
const kmDaPercorrere = parseInt(prompt("Quanti km vuoi percorrere?"));
const etaPasseggero = parseInt(prompt("Quanti anni hai?")); 
const prezzoKm = 0.21;
let sconto = 0;
const prezzoBiglietto = (kmDaPercorrere * prezzoKm)
let scontoApplicato;
let prezzoScontato;
let prezzoFinale;

prezzoFinale = prezzoBiglietto;

if(etaPasseggero < 18){
  sconto = 0.2;
  prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

if(etaPasseggero > 65) {
  sconto = 0.4;
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);

}

console.log('Il prezzo del biglietto è ',prezzoFinale)