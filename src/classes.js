class Person {
  constructor(a, b) {
    this.a = a;
    this.b =b;
    // Initialization code
  }

  // Methods
  add() {
    console.log(this)
    console.log(this.a + this.b)
    // Method logic
  }

  static staticAdd() {
    console.log(this)
    console.log(this.a + this.b)
  }
}

function Person2() {
  this.methodName = function() {}
}

console.log(Person.prototype)
console.log(Person2.prototype)

const p1 = new Person(1,2)
console.log(Person.staticAdd())
console.log(p1.add())