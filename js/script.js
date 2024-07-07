// funzione per generare la casella
function createSquare() {
    let elementSquare = document.createElement('div');

    return elementSquare;
}

// richiamo l'elemento #grid dal dom
const grid = document.getElementById('grid');

for (let i = 0; i < 100; i++) {

    let square = createSquare();

    square.innerText = i + 1;

    // appendo la casella all'elemento #grid
    grid.append(square);
    
}




