//!promise

// let p1 = new Promise((resolve, reject) => {});
// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//   resolve("Success");
// });
// console.log(p2);
// p2.then((res) => {
//   console.log(res);
// }).catch((err) => console.log(err))
// .finally(()=>console.log("final"))

// let p3 = new Promise((resolve, reject) => {
//   reject("Failure");
// });

// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))
// console.log(p3);

//! API fetching

function fetchUsers() {
  let response = fetch("https://jsonplaceholder.typicode.com/users");
  response
    .then((res) => {
      return res.json().then((data) => {
        console.log(data);
      });
    })
    .catch((err) => console.log(err));
}
fetchUsers();
