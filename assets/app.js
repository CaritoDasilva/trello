plusWork = document.getElementById('homeworkDiv');

function drawCard() {
  homeworkDiv.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." id="plusWorkBefore"> <a href = "#" class = "btn btn-primary" id="listBtn"> Añadir Lista</a></div></div>`;

}