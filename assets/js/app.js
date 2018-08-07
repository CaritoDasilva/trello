listBtn = null;
nameList = document.getElementById('plusWorkBefore').value;

function drawCard() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." id="plusWorkBefore"> <a href = "#" class = "btn btn-primary listBtn" onclick="drawList()"> Añadir Lista</a></div></div>`;

}


function drawList() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body" id="listAdded"><h5 class = "card-title">${plusWorkBefore.value}</h5><a href="#" class="list-group-item list-group-item-light" id="addCard" onclick="addOneHomework()">+ Añade una tarjeta</a>`;

};

function addOneHomework() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${nameList}</h5>
    <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." id="addingCard">
    < a href = "#" class = "btn btn-primary listBtn"> Añadir Tarjeta </a></div></div>`
}