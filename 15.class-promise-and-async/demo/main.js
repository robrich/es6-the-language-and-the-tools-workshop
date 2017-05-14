import $ from 'jquery'; // var $ = require('jquery');
import Math from './math';

let container = $('#container');
function log(msg) {
  container.append($('<p />', {text: msg}));
}

function logResult(x, operator, y, result) {
  log(x+' '+operator+' '+y+' = '+result);
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

  let math = new Math();

  let operator = operatorInput.val();

  let result;
  switch(operator) {
    case '+':
      result = math.add(x, y);
      logResult(x, operator, y, result);
      break;
    case '-':
      math.subtract(x, y, function (err, result) {
        if (err) {
          log(err);
          return;
        }
        logResult(x, operator, y, result);
      });
      break;
    case '*':
      result = math.multiply(x, y);
      logResult(x, operator, y, result);
      break;
    case '/':
      math.divide(x, y).then(function (result) {
        logResult(x, operator, y, result);
      }).catch(function (err) {
        log(err);
      });
      break;
  }
}
$('#runit').submit(function (e) {
  e.preventDefault();
  runit();
});

// run it on page load
runit();
