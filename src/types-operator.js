class AB {}
console.log('String', typeof String); // function
console.log('Array', typeof Array); //function
console.log('null', typeof null);// object
console.log('undefined', typeof undefined);// undefined
console.log('[]', typeof []);// object
console.log('class AB', typeof AB);// function
console.log('function(){}', typeof function() {}); //function


let a = "1";
let b = "2";

console.log(a+b); // 12(strinng)
console.log(+a + +b) // 3(number)
console.log(b - a) // 1(number)

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//true

console.log(undefined == null)// true


