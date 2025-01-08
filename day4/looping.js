for(let i=1; i<=10; i++ ){
    console.log("javascript");
}

for(let i=1;i<=100;i++){
    if(i%2 == 0){
        console.log(i,"It is a even number");
    }else{
        console.log(i,"It is a odd number")
    }
}


let mul = 1
let Num = Number(prompt("Enter the number"))
for(i=1;i<=Num;i++){
    mul *=i
}
console.log(mul);




let j =1;
do{
    console.log("hello");
    j++;
    
}while(j>= 5)