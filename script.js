//Hur många ben???


function countLegs(tupp, hund, gris, katt){
    return tupp * 2 + hund * 4 + gris * 4 + katt * 4;
}

console.log(countLegs(8, 1, 4, 2));




// Skapa en funktion som tar in 4 st parametrar. För de olika djurnen på vårt Zoo (tupp, hund, gris, katt).
// Sedan skall funktionen räkna ut hur många ben som finns totalt och returnera detta värde.
// ex:
// function countLegs(tupp, hund, gris, katt) {...}
// countLegs(8,1,4,2) // returnerar 44