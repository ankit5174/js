arr = [1,2]
let arrLike = {0: 'some', length: 1};
// console.log(arr.concat(arrLike));

arrLike =  {0: 'some', length: 1, [Symbol.isConcatSpreadable] : true};
let concatArrLike = arr.concat(arrLike);
// console.log(concatArrLike);
// console.log(concatArrLike.length);
// console.log(concatArrLike.map(i => console.log(`*${i}*`)));

// console.log([1,2] + 1);

// let a5 = [1,2,3,4,5];
// a5.length = 3;
// console.log(a5)
// a5.length = 0;
// console.log(a5)


let range = {from : 0, to: 5};
range[Symbol.iterator] = function () {
    let current = this.from;
    const end = this.to;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
}



//creation of Array
const a1 = [1,2,3];
const a2 = new Array(2);
const a3 = new Array(1,2,3)
const a4 = Array(2)
const a5 =  Array.of(65)
const a6 = Array.from(range);
const a7 =Array.from('hellow')
const a8 = [..."ankit"]

console.log(a2);
a2.map(i => console.log(`a${i}b`));
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6)
console.log(a7);
console.log(a8);
