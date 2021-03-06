let data = new Array(5);
console.log('data', data); //stampa data [ <5 empty items> ]

data.fill(0);
console.log('data filled', data); //[0,0,0,0,0]

data = Array.from('hello');
console.log('from hello to data', data); //[ 'h', 'e', 'l', 'l', 'o' ]

data = [0,2,5,4,3];
console.log('data sorted: ', data.sort());
console.log('data sliced: ', data.slice(1, 3));
