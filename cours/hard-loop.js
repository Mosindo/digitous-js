//01 - Sum
//Je souhaite ajouter 50 entre O et dans un tableau
//une boucle pour calculer la somme des éléments de votre tableau
console.table("exercice1")
var numbers = [];
var count = 0;
var max =100;
var min = 50;
for(var i = 0; i <50;i++){
   var random = Math.floor(Math.random() * (max - min) + min);
   numbers.push(random);
   count+= 1;
   
}
console.table(numbers)
console.log(count)

// 02 - Max
console.table("exercice2")
var numbers = [];
var max =200;
var min = 50;

for(var i = 0; i <50;i++){
   var random = Math.floor(Math.random() * (max - min) + min);
      numbers.push(random);
   }

   numbers.sort((a, b) => b-a);
   console.table(numbers);
   console.log(numbers[0]);

// 03 - Unique
console.table("exercice3")
var numbers = [];
var max = 200;
var min = 50;
for(var i = 0; i <50;i++){
   var random = Math.floor(Math.random() * (max - min) + min);
      numbers.push(random);
   }
   console.log(numbers)
while(numbers>=75 || numbers<=100){
      numbers
}
console.log(numbers)