
function lanciaDado(tiri) {

    let punteggio = 0;

    for (let i = 1; i <= tiri; i++) {

        let num = Math.floor(Math.random() * (6 - 1) + 1);
        console.log(`Lancio ${i}: ${num}`);
        punteggio += num;
       
    }
   
 console.log('Il tuo punteggio è:', punteggio);
    return punteggio;
}

console.log('Giocatore 1 ecco i tuoi tiri:');
let giocatore1 = lanciaDado(5);

console.log('Giocatore 2 ecco i tuoi tiri:');
let giocatore2 = lanciaDado(5);


if (giocatore1 > giocatore2) {
    console.log('Giocatore 1 hai vinto!');
} else if (giocatore1 === giocatore2) {
    console.log('Avete pareggiato!');
} else {
    console.log('Giocatore 2 hai vinto!');
}