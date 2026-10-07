console.log(typeof 42)
console.log(typeof "42")
console.log(typeof true) 
console.log(typeof null) 
console.log(typeof undefined) 
console.log(typeof [1, 2, 3]) 
console.log(typeof { a: 1 })
console.log(typeof function () {}) 
console.log(typeof NaN)


function getType(value) {
    return `The type of ${value} is ${typeof value}`;
}

console.log(getType("Suru"));
