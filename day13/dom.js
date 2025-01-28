// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map((element) => {
//   element.addEventListener("mouseover", () => {
//     element.style.background = element.innerText;
//   });
//   element.addEventListener("mouseleave", () => {
//     element.style.backgroundColor = "transparent";
//   });
// });

let ele = document.createElement("h1");
ele.innerText = "dynamic creation of html element";
ele.setAttribute("id", "demo");
console.log(ele);

document.body.appendChild(ele);

let image = document.createElement("img");
img.src = "./3606208.jpg";
console.log(img);

document.body.appendChild(img);
