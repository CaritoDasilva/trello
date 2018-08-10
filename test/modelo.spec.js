const assert = require('chai').assert;
const expect = require('chai').expect;
global.window = global;
let titleList = 'lista';
let nameList = [];


require("../assets/js/modelo");
require("../assets/js/vista");
require("../assets/js/controlador");

describe("saveNameList", function () {
  it('Guardar los nombres de las listas en un arreglo', function () {
    expect(titleList).to.include(nameList);
  })
});