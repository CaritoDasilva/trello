let listBtn = null;
let nameList = [];
let titleList;

function drawCard() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." id="plusWorkBefore"> <a href = "#" class = "btn btn-primary listBtn" onclick="drawList();saveNameList()"> Añadir Lista</a></div></div>`;

}


function drawList() {
  titleList = document.getElementById('plusWorkBefore').value;
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body" id="listAdded"><h5 class = "card-title">${titleList}</h5><a href="#" class="list-group-item list-group-item-light" id="addCard" onclick="addOneHomework()">+ Añade una tarjeta</a>`;

};

function addOneHomework() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${titleList}</h5>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Introduzca un título para esta tarjeta"><a href = "#" class = "btn btn-primary listBtn"> Añadir Tarjeta</a></div></div>`;
}