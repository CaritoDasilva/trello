let listBtn = null;
let nameList = [];
let titleList;
let cardList = [];
let listingCards;
let titleCard;
window.onload = () => {
  drawInputFirst();
}

function drawInputFirst() {
  homeworkDiv.innerHTML = `<input class="form-control form-control-lg" type="text" placeholder="+ Añada una lista" id="plusWork" onclick="handlerDrawInputFirst()">`;
}

function drawAddList() {
  homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." name="plusWorkBefore"> <a href = "#" class = "btn btn-primary listBtn" onclick="handlerDrawAddList()"> Añadir Lista</a></div></div>`;

}


function drawCard() {
  titleList = document.getElementsByName('plusWorkBefore')[0].value;
  homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body" id="listAdded"><h5 class = "card-title">${titleList}</h5><a href="#" class="list-group-item list-group-item-light" id="addCard" onclick="handlerDrawCard()">+ Añade una tarjeta</a>`;

};

function drawAddCard() {
  homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">${titleList}</h5>
  <input type="text" class="form-control" name='cardPlus' placeholder="Introduzca un título para esta tarjeta"><a href = "#" class = "btn btn-primary listBtn" onclick="agregarTarjetaClick(event)"> Añadir Tarjeta</a></div></div>`;
}

function agregarTarjetaClick(event) {
  titleCard = event.target.parent.getElementsByName('cardPlus')[0].value;
  agregarTarjeta(titleCard);
}

function drawListOfCards() {
  homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${titleList}</h5><ul class="list-group list-group-flush">
    <li class="list-group-item">${titleCard}</li>
  </div><input type="text" class="form-control" name="cardPlus" placeholder="Introduzca un título para esta tarjeta"><a href = "#" class = "btn btn-primary listBtn" onclick="handlerListOfCards()"> Añadir Tarjeta</a> </div></div> `;
  // homeworkDiv2.innerHTML = `<input class="form-control form-control-lg" type="text" placeholder="+ Añada una lista" id="plusWork" onclick="drawCard()"`;

}



// function drawCardsAdd() {
//   titleCard = document.getElementsByName('cardPlus')[0].value;
//   homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
//     <div class="card-body">
//     <h5 class="card-title">${titleList}</h5><ul class="list-group list-group-flush">
//     <li class="list-group-item">${titleCard}</li>
//   </div><input type="text" class="form-control cardPlus" placeholder="Introduzca un título para esta tarjeta"><a href= "#" class= "btn btn-primary listBtn" onclick="handlerAddOneHomework()"> Añadir Tarjeta</a> </div></div>`;
// }