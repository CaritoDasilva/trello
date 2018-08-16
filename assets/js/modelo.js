// Conjunto de Tarjetas: [
// TARJETA DE TRELLO {
// Título: String
// Tarjetas: Array
// }
// ]

function saveNameToList(name, index) {

  nameList = [];
  nameList.push(titleList);
  console.log(nameList);

};

function saveList(newList) {
  newList = [];
  newList.push(titleCard);
  console.log(newList);
};

function addListModel() {
  let listModel = new List();
};

//Aquí va a ir una función que cree un arreglo con todos los objetos
function addObjectList(listArreglo) {
  listArreglo = [];
  listArreglo.push(List);
}
class List {
  constructor(newList, nameList) {
    this.title = nameList[-1];
    this.card = newList;
  }
}