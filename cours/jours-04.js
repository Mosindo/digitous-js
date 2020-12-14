// 01 - Object
var cat={
    name: "garfield",
    age : "3",
    isCute: true,

};
console.log(cat);
console.log(cat.age);

if(cat.isCute === true){
    console.log("So cute");
}

// 02 - Combine
var cat2 = {
name: "darkseid",
age : "31",
isCute: false,}

var cats= {cat , cat2};

console.log(cat.age);
console.log(cat2.isCute);
console.table(cats);

// 03 - Even 
function checkifEven(num){
    if(num % 2 === 0){
        console.log("even")
    }
    else{
        console.log("odd")
    };
    return num;
}

checkifEven(98765633222);

// 04 - Compare
function compare(num1,num2){
    if(num1 >num2){
        console.log(`${num1} is bigger` )
    }
    else{
        console.log(`${num2} is bigger`)
    }
};

compare(43,57);