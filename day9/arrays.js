let userData = {
  name: "Sanjay",
  age: 22,
  city: "Siddipet",
};

console.log(userData.name, typeof userData);

let x = JSON.stringify(userData);
console.log(x, typeof x);

let y = JSON.parse(x);
console.log(y);
