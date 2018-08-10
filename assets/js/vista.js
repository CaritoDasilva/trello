let listBtn = null;
let nameList = [];
let titleList;
let cardList = [];
let listingCards;
let titleCard;

function drawCard() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." name="plusWorkBefore"> <a href = "#" class = "btn btn-primary listBtn" onclick="handlerDrawCard()"> Añadir Lista</a></div></div>`;

}


function drawList() {
  titleList = document.getElementsByName('plusWorkBefore')[0].value;
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body" id="listAdded"><h5 class = "card-title">${titleList}</h5><a href="#" class="list-group-item list-group-item-light" id="addCard" onclick="addOneHomework()">+ Añade una tarjeta</a>`;

};

function addOneHomework() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">${titleList}</h5>
  <input type="text" class="form-control" name="cardPlus" placeholder="Introduzca un título para esta tarjeta"><a href = "#" class = "btn btn-primary listBtn" onclick="handlerAddOneHomework()"> Añadir Tarjeta</a></div></div>`;
}

function listOfCards() {
  titleCard = document.getElementsByName('cardPlus')[0].value;
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${titleList}</h5><ul class="list-group list-group-flush">
    <li class="list-group-item">${titleCard}</li>
  </div><input type="text" class="form-control" name="cardPlus" placeholder="Introduzca un título para esta tarjeta"><a href = "#" class = "btn btn-primary listBtn" onclick="handlerListOfCards()"> Añadir Tarjeta</a> </div></div> `;

}



function drawCardsAdd() {
  titleCard = document.getElementsByName('cardPlus')[0].value;
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${titleList}</h5><ul class="list-group list-group-flush">
    <li class="list-group-item">${titleCard}</li>
  </div><input type="text" class="form-control cardPlus" placeholder="Introduzca un título para esta tarjeta"><a href= "#" class= "btn btn-primary listBtn" onclick="handlerAddOneHomework()"> Añadir Tarjeta</a> </div></div> `;
}