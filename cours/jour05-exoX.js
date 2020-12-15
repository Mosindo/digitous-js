function calculate(num1,operateur,num2){
    var num1 = parseInt(num1);
    var num2 = parseInt(num2)
if (operateur === "+"){
   return num1 + num2;
}
else if (operateur === "-"){
    return num1 - num2;
 }
 else if(operateur === "/"){
    return num1 / num2;
 }
 else if(operateur === "%"){
    return num1 % num2;
 }
 else if(operateur === "x"){
    return num1 * num2;
 }
}

//console.log(calculate (process.argv[2],process.argv[3],process.argv[4]));

function multiply(num){
    for(var i = 1; i<=10;i++ ){
        console.log( `${num}*${i}=`,num*i)
    }

}

multiply (process.argv[2]);