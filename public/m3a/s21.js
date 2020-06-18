let data = [1, 2, 3, 4, 5];
console.log('data', data);

let [first, second] = data;
console.log('first', first);
console.log('second', second);

let [ab, , c, ...va] = data;
console.log('ab', ab);
console.log('c', c);
console.log('va', va);

let obj = { a: 42, b: true }; 
let { a, b } = obj;
console.log('obj ', obj );
console.log('a b  ', { a, b } );

let obj1 = { a: 42, b: true };
let { a: age, b: flag } = obj1; // estrazione con nuovi nomi
console.log('obj1 ', obj1);
console.log('age flag  ', { age, flag } );