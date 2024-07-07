// funzione per generare la casella
function createSquare() {
    let elementSquare = document.createElement('div');

    return elementSquare;
}

// richiamo l'elemento #grid dal dom
const grid = document.getElementById('grid');

// appendo la casella all'elemento #grid
grid.append(elementSquare);

