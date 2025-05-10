let a = {name: 'ankit', props: {age: 30}};
let b = Object.assign({}, a); //nested cloning not done
let c = structuredClone(a)
console.log(a.props === a.props); //true
console.log(a.props === b.props); //true
console.log(a.props === c.props); //false
