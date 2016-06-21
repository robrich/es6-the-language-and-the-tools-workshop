import $ from 'jquery'; // var $ = require('jquery');
import {add} from './lib/add'; // var add = require('./lib/add').add;
import subtract from './lib/subtract'; // var subtract = require('./lib/subtract').default;
import * as multlib from './lib/multiply'; // var multlib = require('./lib/multiply');
import {divide} from './lib/divide'; // var divide = require('./lib/divide');

let container = $('#container');
function log(msg) {
  container.append($('<p />', {text: msg}));
}

let added = add(3, 3);
log('3+3='+added);

let subtracted = subtract(3, 3);
log('3-3='+subtracted);

let multiplied = multlib.multiply(3, 3);
log('3*3='+multiplied);

let divided = divide(3, 3);
log('3/3='+divided);
