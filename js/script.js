const kilomNumbers = parseFloat(prompt("Quanta distanza devi percorrere?")); 

const peopleAge = parseInt(prompt("Che età hai?"));

document.getElementById('kmt').innerHTML = kilomNumbers + 'km';
document.getElementById('età-pass').innerHTML = peopleAge + '';

let ticketPrice = kilomNumbers *0.21;

let ticketMinAge = ticketPrice - (ticketPrice * 0.21);
let ticketOverAge = ticketPrice - (ticketPrice * 0.39);

if (peopleAge <= 18) {
    document.getElementById('costo').innerHTML = 'Il costo del biglietto è; &euro; ' + ticketMinAge.toFixed(2)
} else if (peopleAge >= 65){
    document.getElementById('costo').innerHTML = 'Il costo del biglietto è; &euro; ' + ticketOverAge.toFixed(2)
} else {
    document.getElementById('costo').innerHTML = 'Il costo del biglietto è; &euro;' + ticketPrice.toFixed(2)

}
