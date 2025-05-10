"use strict";

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined



//new operator
function user(name) {
    this.name = name
}

function emptyuser(name) {
    
}

function userwithreturnobject(name) {
    return {
        name,
        age: 0
    }
}

function userwithreturnprimitive(name) {
    return 1;//ignored and empty obect is returned as non object is ignore
}


console.log(new user('jack'))
console.log(new user)
console.log(new emptyuser('jack'))
console.log(new userwithreturnobject('jack'))
console.log(new userwithreturnprimitive('jack'))



//pass by reference/value


let aa = "Ankit";
function show(aa) {
   aa = "*"  + aa + "*";
   console.log(aa)
}
show(aa)
console.log(aa)


let bb = {msg: 'Ankit'};
function showMsg(bb) {
   bb.msg = "*"  + bb.msg + "*";
   console.log(JSON.stringify(bb))
}
showMsg(bb);
console.log(JSON.stringify(bb))



const a = {}
const b = { id: '123'}
const c = {id: '456'}
a[b] = 100
a[c] = 102
console.log("value" ,a[b])


function s(x) {
    x.a= 3;
    alert(x.a)
}
let x = {a: 4};
s(x);
alert(x.a);

function st(t) {
    t = 3
    alert(t)
}
let t = 4;
st(t);
alert(t);