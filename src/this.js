// "use strict";

let user = {
  firstName: "Ilya",
  sayHi() {
    console.log(this); //this = refernce of user object both in strict and non strict mode
    let arrow = () => console.log(this.firstName); //this = refernce of user object both in strict and non strict mode
    arrow();
  },
  arrowWithoutThis: () => {
    console.log(this)// this wil be outer lixecal emvironment, in this case window both in strict and non strict
  }
};

function errorThis() {
  console.log(this);// reference of window object in non strict mode, undefined in strict mode
}

let x = {
  sayHi: errorThis,
  name:'ankit'
}

function makeUser(){
  return this; // this time there's no object literal
}

// alert( makeUser().name ); //error in strict mode and empty string in non strict mode as this will evaluate to window in non strict mode


// user.sayHi(); // Ilya
// user.arrowWithoutThis()
// errorThis();
// x.sayHi();



function a() {
  console.log(this)
  this.name = 'ankit'
  this.show = () => {
    console.log(this)
  }
  this.b = function b() {
    console.log(this)
    this.middle = 'prasad';
    this.show = () => {
        console.log(this)
    }
    this.c = function c() {
      console.log(this);
      this.title  = 'Gupta'
      this.show = () => {
        console.log(this)
      }
      return this;
    }
    return this;
  }

  return this;
}

const A = new a();
const B = new A.b();
const C = new B.c();

console.log(A, B, C);

console.log(A.show())
console.log(B.show())
console.log(C.show())


