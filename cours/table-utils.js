//Exercice 2 : fonction multiply
function multiply(num){
    for(var i = 1; i<=10;i++ ){
        console.log( `${num}*${i}=`,num*i)
    }

}


//Exercice 3 : addtion
function addition(num){
    for(var i = 1; i<=10;i++ ){
        console.log( `${num}+${i}=`,num+i )

    }

}

module.exports ={
    addition,
    multiply,
};