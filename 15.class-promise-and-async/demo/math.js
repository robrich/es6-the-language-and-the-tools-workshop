export default class Math {
  add(x, y) {
    return x + y;
  }
  subtract(x, y, cb) {
    let answer = x - y;
    cb(null, answer);
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return new Promise((resolve, reject) => {
      if (y === 0) {
        return reject(new Error('can\'t divide by zero'));
      }
      let answer = x / y;
      resolve(answer);
    });
  }
}
