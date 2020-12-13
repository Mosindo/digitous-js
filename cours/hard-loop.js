//01 - Sum
//Je souhaite ajouter 50 entre O et dans un tableau
//une boucle pour calculer la somme des éléments de votre tableau

var numbers = [];
var count = 0;
for(var i = 0; i <50;i++){
   var random = Math.floor(Math.random()* 100+50)
   numbers.push(random)
   count+= 1;
   
}
console.table(numbers)
console.log(count)
