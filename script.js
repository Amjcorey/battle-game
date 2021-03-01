let location1 = 3;
let location2 = 4;
let location3 = 5;
var guess
let hits = 0;
let guesses = 0
let isSunk = false;

while (isSunk = false) {
    guess = prompt(`Ready, aim, fire! (enter a number between 0-6)`);
    if (guess < 0 || guess >6 ) {
        alert(`Please enter a valid number from 0-6!`);
    } else {
        guesses = guesses + 1;

        if (guesses == location1 || guesses == location2 || guesses == location3) {
            alert(`HIT`);
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert(`You sunk my battleship!`);
            }
        }
    }
}