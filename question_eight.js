let a = 10;
let b = a;
b = 20;
console.log(a, b);
 
let userOne = { name: "Amaka", age: 22, address: {state: "Lagos", street: 112} };
// let userTwo = userOne;
let userTwo = {...userOne};
userTwo.age = 40;
console.log(userOne.age);
userOne.address.state = "Abia";
console.log(userOne.address.state);
