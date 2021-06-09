function isPal(world) {
    var wLength = parseInt(world.length - 1);

    var wPal = '';
    for (i = wLength; i >= 0; i--) {
        wPal += world[i];
    }

    if (world == wPal) {
        return true;
    } else {
        return false;
    }
}

function isPari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


var userWorld = prompt('Inserisci una parola');

if (isPal(userWorld)) {
    document.getElementById('world').innerHTML = userWorld + ' è una parola palindroma! Il suo contario è ' + wPal;
} else {
    document.getElementById('world').innerHTML = userWorld + ' non è una parola palindroma!';
}

// ------------------------------------------------------

var userChoice = prompt('Pari o dispari?');
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    alert('Devi scegliere tra pari o dispari!');
    var userChoice = (prompt('Pari o dispari?')).toLowerCase;
}
var userNum = parseInt(prompt('Scegli un numero da 1 a 5!'));
while (isNaN(userNum) || userNum === 0 || userNum > 5) {
    alert("Devi inserire un numero compreso fra 1 e 5!");
    var userNum = parseInt(prompt('Scegli un numero da 1 a 5!'));
}
var numRandom = Math.floor(Math.random() * 5) + 1;
var sum = userNum + numRandom;
var output = document.getElementById('number');



output.innerHTML = 'Hai scommesso su ' + userChoice + '</br> Il numero che hai scelto è ' + userNum + '</br> Il numero scelto dal tuo avversario è ' + numRandom + '</br> La loro somma è ' + sum;

if (isPari(sum)) {
    output.innerHTML += '</br> Il numero è pari!';
    var result = true;
} else {
    output.innerHTML += '</br> Il numero è dispari!';
    var result = false;
}

if ((result === true && userChoice === 'pari') || (result === false && userChoice === 'dispari')) {
    output.innerHTML += '</br> Complimenti, hai vinto!';
} else {
    output.innerHTML += '</br> Ops! Purtroppo hai perso...';
}




