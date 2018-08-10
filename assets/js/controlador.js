function handlerDrawCard() {
  drawList();
  saveNameList();
}

function handlerAddOneHomework() {
  listOfCards();
  saveListOfHomeworks();
}

function handlerListOfCards() {
  saveListOfHomeworks();
  cardCreator();
  drawCardsAdd();
}