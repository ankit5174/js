let id1 = Symbol("id1");
console.log(id1);
// alert(id1) //cannot convert symbol to string
// alert(id1.toString())
// alert(id1.description)

let id = Symbol('id');
let idAgain = Symbol.for('id');
console.log(id === idAgain)
console.log(Symbol.for('id') === idAgain)