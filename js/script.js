// funzione per generare la casella
function createSquare() {
    let elementSquare = document.createElement('div');

    elementSquare.classList.add('square');

    return elementSquare;
}

// richiamo l'elemento #grid dal dom
const grid = document.getElementById('grid');

for (let i = 1; i <= 100; i++) {

    let square = createSquare();

    square.innerText = i;

    // appendo la casella all'elemento #grid
    grid.append(square);
    
}