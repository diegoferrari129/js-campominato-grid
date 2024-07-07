
// funzione per generare la casella
function createSquare() {

    // creo un elemento
    let elementSquare = document.createElement('div');

    //assegno una classe all'elemento 
    elementSquare.classList.add('square');

    // restituisco il valore del'elemento alla funzione
    return elementSquare;
}

// richiamo l'elemento #grid dal dom
const grid = document.getElementById('grid');

// inizio un ciclo di 100 interazioni 
for (let i = 1; i <= 100; i++) {

    //assegno ad'una variabile il valore di una funzione per generare una casella ad'ogni interazione
    let square = createSquare();

    square.addEventListener('click', function() {
        this.classList.toggle('clickedSquare');
    });

    // mostro il numero dell'interazione del su ogni casella creata
    square.innerText = i;

    // appendo la casella all'elemento #grid
    grid.append(square);
}