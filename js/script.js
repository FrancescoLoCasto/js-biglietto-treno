const kilomNumbers = parseFloat(prompt("quanta distanza devi percorrere?"))

const peopleAge = parseInt(prompt("Che età hai?"))

document.getElementById('kmt').innerHTML = kilomNumbers + 'kmt'
document.getElementById('età-pass').innerHTML = peopleAge + 'età-pass'

let ticketPrice = kilomNumbers *0.21

let ticketMinAge = ticketPrice - (ticketPrice * 0.21)
let ticketOverAge = ticketPrice - (ticketPrice * 0.39)

if (peopleAge <= 18) {
    document.getElementById('costo')
}
