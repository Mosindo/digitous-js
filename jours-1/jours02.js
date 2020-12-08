// 01- Number
var integer = 102;
var float = 13.9;

console.log(integer);
console.log(float);
// 02- Convert
var basic = 34;
console.log(basic);
var stringified =basic.toString();
console.log(stringified)
// 03- Round
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// 04- Arithmétique
var test =12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);
console.log(test ** bis);

// 05- Comparaison
var test= 143 ;
var bis = 219 ;
console.log( test > bis);
console.log( test < bis);
console.log( test >= bis);
console.log( test <= bis);
console.log( test == bis);
console.log( test === bis);
console.log( test != bis);
console.log( test !== bis);

// 06- Condition
var limit = 50 ;
var score = 64 ;
//Les blocs if / else servent à exécuter du code si quelque chose est vérifié / ou pas.
if( score >= limit){
    console.log("Ok good !");
}
else {
    console.log("Oh nooo...");
};

score = 34;

if( score >= limit){
    console.log("Ok good !");
}
else {
    console.log("Oh nooo ...");
};
/*s'écrit au minimum comme suit :
if (condition) {
	... // ce bloc s'exécute si la condition est vraie
} else {
	... // ce bloc s'exécute si la condition est fausse
}
*/
// 07- Condition II
var password = "azerty";

if( password.length > 5){
    console.log("The password is secure");
}
/*else {
    console.log("your code is too short ...");
}*/;

// 08- Condition III


if( password.length > 5 && score >= limit ){//&& ("ET")
    console.log("Everything is good");
}
else if(password.length || 5 && score >= limit ){//|| ("OU")
console.log( "Something is good" );}
else{
    console.log( "Nothing is good")
}
// 09- Bonus 
var random = Math.random();

console.log(random);//La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1].
// 10- Bonus II
var month = "January";//Les blocs switch servent à exécuter du code en fonction de la valeur de quelque chose :
var month= "November"
switch (month) {
    case "December": 
    break; 
	case "January": 
	case "February": 
		console.log("Winter");
        break;
    case "March":      
    case "April": 
	case "May":  
		console.log("Spring");
        break; 
    case "June": 
    case "July":   
    case "August": 
    console.log("Summer");
    break; 
    case "September": 
    case "Octcber":   
    case "November": 
    console.log("Winter is coming");
        break; 
	default: 
		console.log("That's not a season...");
}

// 01- Bonus III
var roundedNumber = 3.6; 
//3.6 - 4= -0,4; 
//3 (a)et 4 (b)-[0;1]
// a < b (a-b) >=-0,5(Math.ceil) ou ,5(Math.floor) ;  
//4


if(roundedNumber - Math.ceil(roundedNumber) >= -0.5){
    console.log(Math.ceil(roundedNumber))
}
else{
    console.log(Math.floor(roundedNumber))
}

// 01- Bonus IV

//A la fin rajouté des commentaire à mes exercices pour avoir des notes ecrite de mes résolution de problème.