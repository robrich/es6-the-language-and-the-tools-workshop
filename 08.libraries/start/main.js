// TODO: add import lines to add jquery and libraries from lib folder

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
