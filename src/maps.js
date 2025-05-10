let map = new Map();
let x = {x: 1};
map.set(x, 2);

console.log(map.get(x));
console.log(map.keys());//returns iterator
console.log(map.keys().next());