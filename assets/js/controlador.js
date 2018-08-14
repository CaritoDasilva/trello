function handlerDrawInputFirst() {
  drawAddList();
}

function handlerDrawAddList() {
  drawCard();
}

function handlerDrawCard() {
  drawAddCard();
  saveNameList();
}

function handlerDrawAddCard() {
  drawListOfCards();
}

function handlerListOfCards() {
  saveListOfCards();
  drawListOfCards();
}

function agregarTarjeta(nombreTarjeta) {
  agregarTarjetaModelo(nombreTarjeta);
  const listaTarjetas = obtenerListaTarjetas();
  mostrarTarjetas(listaTarjetas);
}