{
    let x = "ankit";
    console.log(x);
}
// console.log(x); error

function outer() {
    function inner() { //
        console.log('inner')
    }
}

// inner(); //error


function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter()//creates a separet lexical env

// alert( counter() ); // 0
// alert( counter2() ); // 1
// alert( counter() ); // 2



var a = 5;

function functionScope() {
    console.log(a)
    var a = 4;//declaration is hoisted not the value hence undefined
}

functionScope()

console.log(a)


var fnscopedv = 1;

function functionScope() {
    var fnscopedv = 4;//declaration is hoisted not the value hence undefined
    console.log(fnscopedv)
}

functionScope()

console.log(fnscopedv)