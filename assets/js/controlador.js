function handlerDrawInputFirst() {
  homeworkDiv2.style.display = 'block';
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

function agregarTarjeta(titleCard) {
  agregarTarjetaModelo(titleCard);
  titleCard = obtenerListaTarjetas();
  mostrarTarjetas(listaTarjetas);
}