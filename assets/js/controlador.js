function handlerDrawInputFirst() {
  homeworkDiv2.style.display = 'flex';
  homeworkDiv2.style.flex = 'wrap';
  drawAddList();
}

function handlerDrawAddList() {
  drawCard();
}

function handlerDrawCard() {
  drawAddCard();
  saveNameToList();
}

function handlerDrawAddCard() {
  drawListOfCards();
}

function handlerListOfCards() {
  saveList();
  drawListOfCards();
}

function agregarTarjeta(nombreTarjeta) {
  agregarTarjetaModelo(nombreTarjeta);
  const listaTarjetas = obtenerListaTarjetas();
  mostrarTarjetas(listaTarjetas);
}