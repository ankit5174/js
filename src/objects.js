//Intergert keys are sorted, rest are in creation order

let x = {10: 'ten'};
x[1] = 'one'
x['1'] = 'one1'
console.log(x)

x[10.0] = 'decimal ten';
x[1.0] = 'decimal one';

x[10.2] = 'decimal creation order 1'
x[1.2] = 'decimal creation order 2'

console.log(x)