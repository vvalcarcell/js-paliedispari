var userWorld = prompt('Inserisci una parola');

function isPal(world) {
    var wLength = parseInt(world.length - 1);

    var wPal = [];
    for (i = wLength; i >= 0; i--) {
        wPal += world[i];
    }

    if (world == wPal) {
        return true;
    } else {
        return false;
    }
}

if (isPal(userWorld)) {
    document.getElementById('world').innerHTML = userWorld + ' è una parola palindroma! Il suo contario è ' + wPal;
} else {
    document.getElementById('world').innerHTML = userWorld + ' non è una parola palindroma!';
}
