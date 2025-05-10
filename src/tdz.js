"use strict";

//TDZ
function test(y = x) {
  let x = 20; // TDZ starts here for `x`
  console.log(y);
}

// test()


function A() {
  B()
  function B() {
    console.log('b')
  }

  {
    C();
    function C() {
      console.log('c')
    }
  }
  C()
}

A()