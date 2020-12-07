// 01- Hello Word
console.log("Hello World !");
// 02-String
var test = "My name is Mosindo" ;
console.log(test);
// 03- Concatenation
var name = "Mosindo";
console.log("Nice to meet you " + name);
// 04- String Lenght
var testLength = "I'm very long !";
console.log(testLength.length);
// 05- Replace
var food = "croissant is meh";
console.log(food.replace("meh","so good"));
// 06- Up and Down
var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);
// 07- Split
var Word = "banana";
var letters = Word.split('');
console.log(letters);
// 08- Template
var age ="38";
var template="I'm "+ age +" years old";

console.log(template);

// Bonus

// 09- Substring

var str = "Clown"
console.log(str.substring(0,2));

// 10-échappement
var poeme = 'Dans orange\nIl y a or\nOr il n\’y a pas d\’or\nDans l\’orange\nC\’est orange une orange\nL\’or est dans la bouche';
console.log(poeme);

// 11- 
var changed = "Bonjour" ;
console.log(changed.replaceAll('o', 'a'));//je ne trouve pas le problème
