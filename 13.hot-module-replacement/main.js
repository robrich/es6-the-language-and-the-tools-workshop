import $ from 'jquery'; // var $ = require('jquery');
import * as math from './math';

let container = $('#container');
function log(msg) {
  container.append($('<p />', {text: msg}));
}

let xInput = $('#x');
let yInput = $('#y');
let operatorInput = $('#operator');
function runit() {
  let x = parseFloat(xInput.val());
  if (isNaN(x)) {
    x = 0;
  }

  let y = parseFloat(yInput.val());
  if (isNaN(y)) {
    y = 0;
  }

  let operator = operatorInput.val();

  let result;
  switch(operator) {
    case '+':
      result = math.add(x, y);
      break;
    case '-':
      result = math.subtract(x, y);
      break;
    case '*':
      result = math.multiply(x, y);
      break;
    case '/':
      result = math.divide(x, y);
      break;
  }

  log(x+' '+operator+' '+y+' = '+result);
}
$('#runit').submit(function (e) {
  e.preventDefault();
  runit();
});

// run it on page load
runit();
