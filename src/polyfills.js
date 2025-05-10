// "use strict";

Function.prototype.mycall = function (thisArg, ...args) {
    const specificThis =  thisArg  || globalThis;
    const funcId = Symbol();
    specificThis[funcId] = this; //this is the function being executed
    const result =  specificThis[funcId](...args)
    delete specificThis[funcId];
    return result;
}

Function.prototype.myapply = function (thisArg, ...args) {
    const specificThis =  thisArg  || globalThis;
    const funcId = Symbol();
    // console.log(this) //this is the function being executed as great.myapply, this resolves to anything before .
    specificThis[funcId] = this; 
    const result = args ? specificThis[funcId](...args) : specificThis[funcId]()
    delete specificThis[funcId];
    return result;
}

Function.prototype.myBind = function(thisArg, ...args) { // bind normally does't accepts array
    const targetFunc = this
    return function (...newArgs) {
        const specificThis =  thisArg  || globalThis;
        const allArgs = args.concat(newArgs);
        const funcId = Symbol();
        // console.log(this) //this is the function being executed
        specificThis[funcId] = this; 
        const result = specificThis[funcId](...args) 
        delete specificThis[funcId];
        return result;
    }
}

function great(greeting, ex) {
    // console.log(this)// will be globalThis in non strict mode else undefined
    console.log(`${greeting} ${this.name} ${ex}`)
}

const person = {name: 'Ankit'}

// great("hellow")
// great.mycall(person, "Call")
// great.myapply(person, ["Apply"])
// great.myapply(person)
const bindedGreat = great.bind(person, "Bind")
bindedGreat('2')

Array.prototype.myMap = function(callback, thisArg) {
    if(typeof callback !== 'function') {
        throw new Error('Call back should be a function')
    }
    // console.log(this) //this is the array as a.myapply, this resolves to anything before ., where a is an array
    const result = [];
    for(let i = 0; i < this.length; i++ ) {
        if (i in this) {
            result.push(callback.call(thisArg, this[i], i, this));
        }
    }
    return result;
}


Array.prototype.myForEach = function(callback, thisArg) {
    if(typeof callback !== 'function') {
        throw new Error('Call back should be a function')
    }
    // console.log(this) //this is the array as a.myapply, this resolves to anything before ., where a is an array
    for(let i = 0; i < this.length; i++ ) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

Array.prototype.myFilter = function(callback, thisArg) {
    if(typeof callback !== 'function') {
        throw new Error('Call back should be a function')
    }
    // console.log(this) //this is the array as a.myapply, this resolves to anything before ., where a is an array
    const result= []
    for(let i = 0; i < this.length; i++ ) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result
}


Array.prototype.myReduce = function(callback, initialValue) {
    if(typeof callback !== 'function') {
        throw new Error('Call back should be a function')
    }
    // console.log(this) //this is the array as a.myapply, this resolves to anything before ., where a is an array
    let result = initialValue ? initialValue : this[0];
    let startIndex =  initialValue ? 0 : 1
    for(let i = startIndex; i < this.length; i++ ) {    
        if (i in this ) {
            result = callback(result, this[i], i, this)
        }
    }
    return result
}

let a = [1, 2, 3, 4, 5, 6, 7]

// a.myMap((i) => { console.log(i)}, null)
// a.myForEach((i) => { console.log(i)}, null)
// a.myFilter((i) => i%2, null)
// console.log(a.myReduce((acc, i) => acc + i))
// console.log(a.reduce((acc, i) => acc + i))



function debounce(callback, wait) {
    let timeout;
    return function(...args) {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => callback.apply(this, args), wait)
    }
}

function throttle(callback, wait) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if(now-lastCall>=wait) {
            lastCall = now;
            callback.apply(this, args);
        }
    }
}

const tFunc =throttle((i) => console.log(i), 5000);

// tFunc(12);
// tFunc(13);
// tFunc(14);
// tFunc(15);
// setTimeout(() => tFunc(16), 7000)

Promise.prototype.myAll = function (args) {
    let results = []
    let completed= 0;
    return new Promise((resolve, reject) => {
        for(let i; i< args.length; i++) {
            let p = args[i];
            Promise.resolve(p).then(r => {
                results[i] = r;
                completed++;
                if(completed === args.length) {
                    resolve(results)
                }
            }).catch(reject)
        }
    })

    if(args.length ===0) {
        resolve([])
    }
}

console.log()


function multiply(a,b,c) {
    return a*b*c;
}

function curry(fn) {
    return function curriedFn(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...newArgs) {
                return curriedFn.apply(this, args.concat(newArgs))
            }
        }
    } 
}

function curry2(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

const curriedMultiply = curry(multiply);

curriedMultiply(1)(2)(3);