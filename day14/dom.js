let mainEle = document.createElement("div");

mainEle.setAttribute("id", "mainBlock");
// console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("id", "topBlock");
// console.log(topEle);

let image = document.createElement("img");
image.src =
  "https://cdn-cm.freepik.com/previews/d7509003-72f7-431c-8fde-8b8315778790.jpg?token=exp=1737957108~hmac=7cc871a0e467090fd08ad9c971fe78188822935951973862e92079cd3a19aac2";
image.width = 400;
image.height = 400;
image.style.objectFit = "cover";

topEle.appendChild(image);

let bottomEle = document.createElement("div");

bottomEle.setAttribute("class", "bottomBlock");
// console.log(bottomEle);

let h1 = document.createElement("h1");
h1.innerText = "BOAT";

let button = document.createElement("button");
button.innerText = "view more";

bottomEle.appendChild(h1);
bottomEle.appendChild(button);

mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);
