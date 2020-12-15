// 01 - Object
var cat={
    name: "garfield",
    age : "3",
    isCute: true,

};
console.log(cat);
console.log(cat.age);

if(cat.isCute ){
    console.log("So cute");
}

// 02 - Combine
var cat2 = {
name: "darkseid",
age : 31,
isCute: false,}

var cats= [cat , cat2];

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
        console.log(`${num1} is bigger` );
        return num1;
    }
    else{
        console.log(`${num2} is bigger`)
        return num2;
    }
}  

compare(43,57);

// 05 - add up
var sum = 0;
function addUp(num){
    for(var i= 1; i<= num; i++){
    sum += i
    } ;
    return  num;
}

addUp(12);

// 06 - Time
function format(num){
    var h = num / 3600;
    var num = num % 3600;
    var m = num /60;
    var s = num % 60;
    console.log(`${Math.floor(h)}h ${Math.floor(m)}m ${s}s`);

 

}

format(4443900)