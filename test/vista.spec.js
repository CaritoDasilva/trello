const assert = require('chai').assert;
const expect = require('chai').expect;
global.window = global;
const jsdom = require('jsdom');
const {
  JSDOM
} = jsdom;


require("../assets/js/modelo");
require("../assets/js/vista");
require("../assets/js/controlador");