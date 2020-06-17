let alpha = true;
let beta = false;

console.log('alpha', alpha);
console.log('beta', beta);

console.log('!alpha', !alpha);
console.log('alpha && beta', alpha && beta);
console.log('alpha || beta', alpha || beta);
console.log('alpha & beta', alpha & beta);
console.log('alpha | beta', alpha | beta);

let gamma = 0b101;  // 5
let delta = 0b110;  // 6
console.log('gamma', gamma);
console.log('delta', delta);

console.log('gamma & delta', gamma & delta); //100 = 4
console.log('gamma | delta', gamma | delta); //111 = 7
console.log('gamma ^ delta', gamma ^ delta); //011 = 3
console.log('gamma && delta', gamma && delta); //110
console.log('gamma || delta', gamma || delta); //101
