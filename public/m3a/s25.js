let set = new Set(Array.from('hello')); //4: helo
console.log(`my set has ${set.size} elements`);
set.forEach(item => {
    console.log(item);
});

let map = new Map();
console.log(`my map had ${map.size} elements. Let's add something to it`);

for (let i = 0; i < 6; i++) {
    map.set(i, String.fromCodePoint('A'.charCodeAt(0) + i));
}

map.forEach((v, k) => {
    console.log(`${k} --> ${v}`);
}); //0 --> A, 1 --> B fino a 5 --> F
