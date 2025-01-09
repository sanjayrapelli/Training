//without parameters

function demo() {
    console.log("hello")
}
demo();

//functions with parameters andd argumentss

let a ;
let b ;

function sum(a, b) {
    console.log(a+b);
}
sum(8,5);

function text() {
  console.log("named function");
}
text();

// anonymous function :have no namevexcuted with function expression or IIFE it cannot be excuted by itself

function(){
    console.log("Anonymous funtion");
}

function expresstion

let x = function () {
  console.log("anonymous is invoked using function expresstion");
};
// console.log(x); //funtion expressstion
x();

//IIFE :Immediately Invoked function expressstion: it is a function that runs as soon as it defined.
(function () {
  console.log("IIFE");
})(); //IIFE function will called only onces

//Arrow Function
function demo(a) {
  console.log();
}
demo();

let y = (a) => console.log("Arrow function");
y("Arrow function with one parameter");

implicit returns amd explicit returns

function test1(a, b) {
  return a + b;
}
console.log(test1(5, 5));

let x = (a, b) => {
  return a * b;
};
console.log(x(5, 5));

let y = (a, b) => a + b;
console.log(y(100, 200));
