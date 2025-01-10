console.log("hello");

//higher order function
function hof(a) { //!higher order function
  return a();
}
let x = hof(function () {
  return "Callback function";
});
console.log(x);

let users = ["sanjay", "akshay", "adarsh", "shiva", "don"];
console.log(users);
users.map((user) => {
  console.log(user);
});


// closure ......

var a = 10;
let b = 45;
function x(){
    var user = "sanjay";
    let company = "google";
    const sal = "12345677890";
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a,b);
  

}
